"use client";
import React from "react";
import { useRouter } from "next/router";
import { Heading, Text, Link, Flex, Divider, Skeleton } from "@chakra-ui/react";

import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function Result({
  entry,
  isLoading,
}: {
  entry: any;
  isLoading: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <Link onClick={() => router.back()}>
        <Flex alignItems="center" mb={4}>
          <ChevronLeftIcon /> <Text fontSize="sm">Back</Text>
        </Flex>
      </Link>
      <Divider my={2} />
      <Skeleton isLoaded={!isLoading}>
        <Heading as="h1" size="md" color="brand">
          {entry.title}
        </Heading>
      </Skeleton>
      This is an example of a component override.
    </>
  );
}
