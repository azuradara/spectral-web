import axios from 'axios';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import spinnerIcon from 'assets/svg/spinner.svg';

const variants = {
  hidden: {
    translateY: -10,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Signup = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password, password_confirmation } = e.target;
    const val = (tar) => tar.value;

    const userData = {
      email: val(email),
      username: val(username),
      password: val(password),
      password_confirmation: val(password_confirmation),
    };

    try {
      setLoading(true);
      setMessage(false);
      setErr(null);

      await axios.post('http://spectralapp.ddns.net/api/auth/signup', userData);

      setMessage('Account created, redirecting.');
      setLoading(false);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (e) {
      setLoading(false);
      setMessage('Registration failed, check your inputs and try again.');
      setErr(e.response.data);
    }
  };

  return (
    <div className="signup contentContainer">
      <Head>
        <title>Spectral - Sign up</title>
      </Head>
      <div className="_content">
        <form onSubmit={(e) => handleSubmit(e)} className="form-control">
          <div className="_container">
            <h1 className="header">Sign up</h1>
            <div className="form-control__input">
              <input type="text" name="email" placeholder="E-Mail" />
              {err?.errors.email && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="error"
                >
                  {err.errors.email[0]}
                </motion.p>
              )}
            </div>

            <div className="form-control__input">
              <input type="text" name="username" placeholder="Username" />
              {err?.errors.username && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="error"
                >
                  {err.errors.username[0]}
                </motion.p>
              )}
            </div>

            <div className="form-control__input">
              <input type="password" name="password" placeholder="Password" />
              {err?.errors.password && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="error"
                >
                  {err.errors.password[0]}
                </motion.p>
              )}
            </div>

            <div className="form-control__input">
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
              />
              {err?.errors.password_confirmation && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="error"
                >
                  {err.errors.password_confirmation[0]}
                </motion.p>
              )}
            </div>
            <div className="separator" />

            <button type="submit" className="appBtn_Btn">
              {loading ? (
                <Image className="spinner" src={spinnerIcon} width={24} />
              ) : (
                'Submit'
              )}
            </button>
            {message && (
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                className="error_end"
              >
                {message}
              </motion.p>
            )}
          </div>
          <div className="sc-fzoant kZeKIC">
            <div type="small" color="labelMuted" className="labelMuted">
              You acknowledge that you read, and agree to our{' '}
              <span type="smallPlus" className="sc-AxirZ dqUfxv">
                <Link href="/terms">Terms of Service</Link>
              </span>{' '}
              and our{' '}
              <span type="smallPlus" className="sc-AxirZ dqUfxv">
                <Link href="/privacy">Privacy Policy</Link>
              </span>
              .
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
