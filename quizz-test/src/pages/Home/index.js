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
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CardBody } from 'reactstrap';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [keywordSubject, setKeywordSubject] = useState('');

  const subjects = [
    {
      label: 'ReactJS',
      id: 'reactjs',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: '1',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: '2',
        },
      ],
    },
    {
      label: 'Javascript',
      id: 'javascript',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: '3',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: '4',
        },
      ],
    },
    {
      label: 'HTML',
      id: 'html',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: '5',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: '6',
        },
      ],
    },
    {
      label: 'CSS',
      id: 'css',
      questions: [
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)',
          id: '7',
        },
        {
          label: 'Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)',
          id: '8',
        },
      ],
    },
  ];

  const convertToSlug = text => {
    //Đổi chữ hoa thành chữ thường
    let slug = text.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(
      /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
      ''
    );
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, '-');
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
  };

  const handleRedirectPage = (label, id) => {
    const path = convertToSlug(label) + '-' + id + '.html';
    console.log(path);
    navigate(`quizz-test/${path}`);
  };

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
                          <Button
                            colorScheme="gray"
                            size="sm"
                            onClick={() =>
                              handleRedirectPage(question.label, question.id)
                            }
                          >
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
