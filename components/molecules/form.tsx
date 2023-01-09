import React from "react";
import Input from "../atoms/input";
import Button from "../atoms/button";

type ContactFormProps = {
  name: string;
  email: string;
  message: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const ContactForm = ({
  name,
  email,
  message,
  onChange,
  onSubmit,
}: ContactFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        name="Name"
        type="text"
        value={name}
        onChange={onChange}
      />
      <Input
        placeholder="Email Address"
        name="Email"
        type="email"
        value={email}
        onChange={onChange}
      />
      <Input
        placeholder="Message"
        name="Message"
        type="textarea"
        value={message}
        onChange={onChange}
      />
      <Button type="submit" className="bg-yellow-300 text-black">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
