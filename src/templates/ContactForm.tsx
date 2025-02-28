'use client';
import { submitContact } from 'actions/contact';
import { useTranslations } from 'next-intl';
import type { FormEvent } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { DropdownMenu } from '@/components/ui/dropdown-menu';

const ContactsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations('ContactUs');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    request: '',
    message: '',
  });

  const requests = [
    t('request_options.request1'),
    t('request_options.request2'),
    t('request_options.request3'),
    t('request_options.request4'),
    t('request_options.request5'),
    t('request_options.request6'),
    t('request_options.request7'),
    t('request_options.request8'),
    t('request_options.request9'),
    t('request_options.request10'),
    t('request_options.request11'),
    t('request_options.request12'),
    t('request_options.request13'),
    t('request_options.request14'),
    t('request_options.other'),
  ];

  const handleSubmit = async (e: FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      const response = await submitContact(formData);
      if (response.success) {
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          request: '',
          message: '',
        });
        toast.success(t('success'));
      } else {
        toast.error(response.errors && response.errors[0] ? response.errors[0].message : response.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullname" className="mb-2 block">{ t('fullname') }</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block">{ t('email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block">{ t('phone')}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="request" className="mb-2 block">{t('request')}</label>
          <DropdownMenu />
          <select
            id="request"
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
            className="w-full rounded border p-2"
          >
            <option value="">{ t('request_select')}</option>
            {requests.map(req => (
              <option key={req} value={req}>
                {req}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block">{ t('message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          { isSubmitting ? t('submitting') : t('submit')}
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
