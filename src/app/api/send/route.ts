import { Resend } from 'resend';

const resend = new Resend('re_SkRtjbh1_CB29gA32nZkgLRsZRN7jzYy9');

resend.emails.send({
  from: 'alicia-olofsson@hotmail.com',
  to: 'alicia-olofsson@hotmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});