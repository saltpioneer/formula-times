// app/page.tsx
import type { NextApiRequest, NextApiResponse } from "next";

import {
  Flex,
  Text,
  Table,
  Box,
  Heading,
  Avatar,
  Callout,
  Badge,
  Progress,
  ScrollArea,
} from "@radix-ui/themes";
import {
  CountdownTimerIcon,
  ExclamationTriangleIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";

import { getLiveDrivers } from "@/app/data";

export default async function LiveScoreboard({}) {
  // Replace '9158' with your actual session key
  const drivers = await getLiveDrivers();
  return (
    <Flex gap="10" align="start">
      {/* Left Column - Table */}

      <Box flexGrow="1">
        <Box py="10px">
          <Heading size="8">Welcome to Formula Times</Heading>
        </Box>
        <ScrollArea
          size="2"
          type="always"
          scrollbars="vertical"
          style={{ height: "100%" }}
        >
          <text>
            The simple, and up-to-date live Formula 1 telemtrics, including
            telemetry data, live timing updates, and real-time race information.
          </text>

          <Box py="2" maxWidth="140px">
            <Callout.Root variant="soft" color="yellow">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
              <Callout.Text>Safety Car</Callout.Text>
            </Callout.Root>
          </Box>
          <Box maxWidth="300px">
            <Progress
              value={25}
              size="3"
              variant="soft"
              radius="full"
              duration="30s"
              color="red"
            />
            <Text>Race Progress</Text>
          </Box>
          <Box py="15px">
            <Table.Root variant="surface" size="3">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell width={"100px"} align="right">
                    Position
                    <Text size="1" color="gray" weight="light">
                      <br />
                      current lap
                    </Text>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell
                    width={"20px"}
                  ></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell width={"200px"}>
                    Name
                    <Text size="1" color="gray" weight="light">
                      <br />
                      country of origin, & driver number
                    </Text>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell width={"100px"}>
                    Constructor
                    <Text size="1" color="gray" weight="light">
                      <br />
                      engine manufacturer
                    </Text>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell width={"100px"}>
                    Interval
                    <Text size="1" color="gray" weight="light">
                      <br />
                      gap to leader
                    </Text>
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell width={"100px"}>
                    Driver Speed
                    <Text size="1" color="gray" weight="light">
                      <br />
                      km/h and mph
                    </Text>
                  </Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {drivers.map((driver, index) => (
                  <Table.Row key={driver.number}>
                    <Table.Cell align="right">
                      <Heading size="4">{index + 1}</Heading>
                    </Table.Cell>
                    <Table.Cell>
                      <Avatar src={driver.headshot} fallback="F1" />
                    </Table.Cell>
                    <Table.RowHeaderCell>
                      <Text weight="medium">{driver.fullName}</Text>
                      <Text size="1" color="gray" weight="light">
                        <br />
                        {driver.countryCode || "unkown"} | {driver.number}
                      </Text>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      {driver.team}
                      <Text size="1" color="gray" weight="light">
                        <br />
                        {driver.engine}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>{driver.interval}s</Table.Cell>
                    <Table.Cell>
                      <Text weight="bold">{driver.speed || 0} </Text>
                      km/h
                      <Text size="1" color="gray" weight="light">
                        <br />
                        <Text weight="bold">
                          {Math.round(driver.speed * 0.621371)}{" "}
                        </Text>
                        mph
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Box>
        </ScrollArea>
      </Box>
      {/* Right Column - Image */}
      <Box width="400px" p="20px">
        <Box py="10px">
          <Heading as="h2">Melbourne Grand Prix</Heading>
        </Box>
        <Flex direction="column" gap="3">
          <img
            src="/MelbourneTrack.jpg"
            alt="Dashboard visual"
            style={{
              width: "auto",
              height: "350px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />

          <Text>
            This weekend's grand prix is held at the prestigious Albert Park, in
            the heart of Melbourne, Australia.
          </Text>
          <Text size="2" color="gray">
            Known for its iconic grandstands and stunning architecture, the
            Albert Park Grand Prix Circuit is a must-visit destination for any
            racing enthusiast. The track's unique layout and challenging corners
            make it a favorite among drivers and spectators alike. With its
            picturesque setting and thrilling races, Albert Park is a must-visit
            destination for any racing enthusiast.
          </Text>
          <Box py="2" maxWidth="320px">
            <Callout.Root>
              <Callout.Icon>
                <CountdownTimerIcon />
              </Callout.Icon>
              <Callout.Text>Chinese Grand Prix begins in 7 days.</Callout.Text>
            </Callout.Root>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
