import {
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardBody } from 'reactstrap';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keywordSubject, setKeywordSubject] = useState('');

  const subjects = [
    {
      label: 'ReactJS',
      id: 'reactjs',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: 'rjs-1',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: 'rjs-2',
        },
      ],
    },
    {
      label: 'Javascript',
      id: 'javascript',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: 'js-1',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: 'js-2',
        },
      ],
    },
    {
      label: 'HTML',
      id: 'html',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: 'html-1',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: 'html-2',
        },
      ],
    },
    {
      label: 'CSS',
      id: 'css',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: 'css-1',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: 'css-2',
        },
      ],
    },
  ];

  useEffect(() => {
    const queryString = searchParams.get('subject');

    if (queryString === 'all') {
      setKeywordSubject('');
    } else {
      let isValue = false;
      console.log('queryString: ', queryString);
      for (let subject of subjects) {
        if (queryString === subject.id) {
          isValue = true;
          setKeywordSubject(queryString);
        }
      }

      if (isValue === false) {
        setKeywordSubject('');
        setSearchParams({ subject: 'all' });
      }
    }
  }, [searchParams]);

  return (
    <div className="container-home">
      <Stack spacing={5}>
        {subjects
          .filter(subject => subject.id.includes(keywordSubject))
          .map(subject => (
            <Card>
              <CardHeader>
                <Heading size="md">{subject.label}</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  {subject.questions.map(question => (
                    <Box key={question.id}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Text fontSize="lg" as="span">
                          {question.label}
                        </Text>
                        <div>
                          <Button colorScheme="gray" size="sm">
                            Thi thử
                          </Button>
                        </div>
                      </div>
                    </Box>
                  ))}
                </Stack>
              </CardBody>
            </Card>
          ))}
      </Stack>
    </div>
  );
};

export default Home;
