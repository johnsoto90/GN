import React, { useEffect } from "react";
import Layout from "../templates/layout";
import ContactForm from "../molecules/form";
import { useRouter } from "next/router";
import Divider from "../atoms/divider";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const router = useRouter();

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "Name":
        setName(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "Message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <Layout className="bg-black/95">
      <div className="text-white min-h-screen p-4">
        <div className="gap-4 p-4 max-w-[960px] m-auto bg-black/50 rounded-lg">
          <h1 className="font-bold text-xl mb-4">Get in touch with us!</h1>
          <Divider />
          <ContactForm
            name={name}
            email={email}
            message={message}
            onChange={onChange}
            onSubmit={(event) => {
              event.preventDefault();
              console.log(name, email);
              router && router.push("/");
            }}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
