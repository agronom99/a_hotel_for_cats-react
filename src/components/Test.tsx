import { FC, useState } from "react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Box, TextInput, Checkbox, Group, Button } from "@mantine/core";
import React from "react";
import { sendMessage } from './../api/telegram';


export const Test: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async ({
    email,
    termsOfService,
  }: typeof form.values): Promise<void> => {
    try {
      setIsLoading(true);
      const message = `ПОШТА: ${email}, ЗГОДА КОДЕНЦІАЛЬНОСТІ: ${termsOfService}`;

      await sendMessage(message);

      notifications.show({
        title: "Форма відправлена",
        message: "Ваш код чудовий! 🤥",
      });
    } catch (e) {
      form.setFieldError('email', e as string);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Checkbox
          mt="md"
          label="Я погоджуюсь надати свої данні"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button loading={isLoading} type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

