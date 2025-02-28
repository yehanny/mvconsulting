import * as React from 'react';

type EmailTemplateProps = {
  fullname: string;
  email: string;
  phone: string;
  request: string;
  message: string;
};

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ fullname, phone, email, request, message }) => (
  <div>
    <h2>
      Contact from
      {' '}
      {fullname}
      {' '}
      !
    </h2>
    <p>
      Phone:
      {phone}
    </p>
    <p>
      Email:
      {email}
    </p>
    <p>
      Request:
      {request}
    </p>
    <p>---</p>
    <p>
      Message:
      {message}
    </p>
  </div>
);

export default EmailTemplate;
