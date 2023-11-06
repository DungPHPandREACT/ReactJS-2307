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
import React from 'react';
import { CardBody } from 'reactstrap';

const Home = () => {
  return (
    <div className="container-home">
      <Stack spacing={5}>
        <Card>
          <CardHeader>
            <Heading size="md">ReactJS</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Javascript</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">HTML</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">CSS</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 1)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
              <Box>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text fontSize="lg" as="span">
                    Tuyển chọn các câu hỏi phỏng vấn ReactJS (phần 2)
                  </Text>
                  <div>
                    <Button colorScheme="gray" size="sm">
                      Thi thử
                    </Button>
                  </div>
                </div>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </div>
  );
};

export default Home;
