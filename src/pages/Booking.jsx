import React from "react";

// import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { sendMessage } from "../api/telegram.tsx";
import { notifications } from "@mantine/notifications";
import { Box, TextInput, Button } from "@mantine/core";
import Popap from "./Popap.jsx";


const Booking = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      pets_name: "",
      phone: "",
      data1: "",
      data2: "",
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      pets_name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      phone: (value) => (value.length < 10 ? 'Телефон повинен мати 10 чисел' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),

    },
  });

  const handleSubmit = async ({
    name,
    email,
    pets_name,
    phone,
    data1,
    data2,
  }) => {
    try {
      setIsLoading(true);
      const message = ` Iм'я:   ${name},
         Ім'я твого улюбленця:   ${pets_name},
         Телефон:   ${phone},
         E-mail:   ${email},
         Бронь з: ${data1},
        до: ${data2}
        `;

      await sendMessage(message);

      notifications.show({
        title: "Форма відправлена",
        message: "в Телеграм 😎 ",}
      );
    } catch (e) {
      form.setFieldError("email", "phone");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maw={300} mx="auto">
      <ul className="booking">
        <li>
          <svg
            className="paw-b"
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="128"
            viewBox="0 0 123 128"
            fill="none"
          >
            <path
              d="M104.471 53.3841C82.2902 55.4243 66.486 27.1114 83.67 15.0791C91.0813 9.8896 101.382 10.9496 109.208 16.0467C127.28 27.8194 123.516 51.6351 104.471 53.3841Z"
              fill="#FAC663"
              fillOpacity="0.15"
            />
            <path
              d="M85.9092 61.5048C104.917 48.1955 133.126 76.3698 118.77 94.3015C112.229 102.47 98.8277 103.243 88.4269 94.7849C76.7658 85.307 75.2235 68.987 85.9092 61.5048Z"
              fill="#FAC663"
              fillOpacity="0.15"
            />
            <path
              d="M40.9376 7.68333C38.807 10.2587 34.4501 14.0075 29.5936 17.5088C24.463 21.214 18.7768 24.6439 14.5872 26.1341C3.26027 30.1424 -5.18499 45.5467 6.90771 56.7906C18.0885 67.1843 27.0107 59.8988 37.3499 69.9287C47.7923 80.0701 60.463 79.6211 68.6232 73.2488C76.175 67.3501 79.8603 56.3761 74.3194 44.0383C68.4122 30.8934 78.295 25.0212 72.3512 10.9666C65.9242 -4.2603 48.5574 -1.53939 40.9376 7.68333Z"
              fill="#FAC663"
              fillOpacity="0.15"
            />
            <path
              d="M52.4554 84.9277C57.8319 81.1631 64.628 81.0411 70.528 84.0062C88.0701 92.8245 89.2677 121.198 72.0264 127.014C50.2248 134.379 33.4582 98.2297 52.4554 84.9277Z"
              fill="#FAC663"
              fillOpacity="0.15"
            />
            <path
              d="M28.6877 69.2696C45.2088 79.8744 43.4678 108.178 25.6474 112.134C4.18237 116.9 -9.27711 82.0555 9.02209 69.2423C14.8947 65.1302 22.4076 65.2379 28.6877 69.2696Z"
              fill="#FAC663"
              fillOpacity="0.15"
            />
          </svg>
        </li>
        <li>
         <a href="a_hotel_for_cats-react/number/numbers">
            <svg
              className="vector-b"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="#1A212F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
         </a>
        </li>
        <li>
          <h1>Забронювати номер</h1>
        </li>
      
      <form onSubmit={form.onSubmit(handleSubmit)} style={{margin:'50px'}}>
        <TextInput
          withAsterisk
          label="Ваше ім'я:"
          placeholder="Name"
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          label="Ім'я твого улюбленця:"
          placeholder="Pet's name"
          {...form.getInputProps("pets_name")}
        />

        <TextInput
          withAsterisk
          label="Телефон:"
          placeholder="Phone"
          {...form.getInputProps("phone")}
        />

        <TextInput
          withAsterisk
          label="E-mail:"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <div className="booking-li">
          <TextInput
            type="date"
            label="Дата заїзду з:"
            placeholder="Data1"
            {...form.getInputProps("data1")}
          />

          <TextInput
            type="date"
            label="до:"
            placeholder="Data2"
            {...form.getInputProps("data2")}
          />
        </div>

        {/* <Link to="/popap" style={{ textDecoration: "none" }}> */}
        <Button
          loading={isLoading}
          type="submit"
          className="main-button-booking"
        >
          <p className="p-promotion">Відправити запит</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M36 18C36 22.8079 34.1277 27.3277 30.7279 30.7279C27.329 34.1268 22.8093 35.9992 18.0022 36H18C13.1921 36 8.67151 34.1277 5.27206 30.7279C1.87234 27.3277 0 22.8079 0 18C0 13.1921 1.87234 8.67151 5.27206 5.27206C8.67151 1.87234 13.1921 0 18 0H18.0022C22.8093 0.000823978 27.329 1.87317 30.7279 5.27206C34.1277 8.67151 36 13.1921 36 18Z"
              fill="#FFFEFD"
            />
            <path
              d="M24.8034 15.5246C21.8389 17.2247 22.3438 22.1874 25.5593 22.1874C26.9462 22.1874 28.1464 21.1449 28.6808 19.812C29.915 16.7336 27.3485 14.0644 24.8034 15.5246Z"
              fill="#FF7236"
            />
            <path
              d="M21.7585 16.1391C25.3153 16.1391 26.3803 10.0992 23.0011 9.10622C21.4616 8.65395 19.7109 9.73914 19.1486 11.7229C18.5177 13.9463 19.7589 16.1391 21.7585 16.1391Z"
              fill="#FF7236"
            />
            <path
              d="M20.8435 26.8903C20.3495 26.7537 19.4729 26.6658 18.5552 26.6531C17.5853 26.6389 16.5697 26.7084 15.9127 26.8903C14.138 27.3847 11.7232 26.1886 12.2531 23.7045C12.7431 21.408 14.504 21.5389 14.9204 19.3625C15.3399 17.163 16.9704 16.1015 18.5552 16.1844C20.0221 16.2614 21.4497 17.3192 21.8387 19.363C22.2526 21.5409 24.0098 21.4088 24.4992 23.7045C25.031 26.1906 22.6111 27.3802 20.8435 26.8903Z"
              fill="#FF7236"
            />
            <path
              d="M15.4983 16.1393C16.5044 16.1393 17.3685 15.555 17.8486 14.6607C19.2759 12.0014 16.9317 8.32 14.2555 9.10841C10.8705 10.1041 11.9435 16.1393 15.4983 16.1393Z"
              fill="#FF7236"
            />
            <path
              d="M13.8909 20.21C15.033 17.4157 12.3259 14.0024 9.74052 15.0764C6.62626 16.3699 7.99979 21.9488 11.424 21.9488C12.523 21.9488 13.4568 21.2723 13.8909 20.21Z"
              fill="#FF7236"
            />
            <path
              d="M20.8439 26.8902C20.3499 26.7537 19.4733 26.6657 18.5557 26.653V16.1844C20.0225 16.2614 21.4501 17.3192 21.8391 19.363C22.2531 21.5408 24.0103 21.4087 24.4996 23.7045C25.0314 26.1905 22.6115 27.3801 20.8439 26.8902Z"
              fill="#FF7236"
            />
          </svg>
        </Button>
        {/* </Link> */}
      </form>
      </ul>
    </Box>
  );
};

export default Booking;
