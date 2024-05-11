import type { FormErrors, FormResult } from '@/types';

export const validationForm = async ({
  name,
  email,
  message,
  chosenService,
  phoneNumber,
  serviceOption,
  subject,
}): Promise<FormResult> => {
  
  const errors: FormErrors = {
    name: '',
    email: '',
    message: '',
    chosenService: '',
    phone: '',
  };

  const chosenServiceString = chosenService
    ? chosenService.toString().toLowerCase()
    : '';

  if (typeof name === 'string' && name.length < 5) {
    errors.name += 'Please enter a name.';
  }
  if (message && typeof message === 'string' && message.length < 10) {
    errors.message += 'Messsage too short.';
  }

  if (chosenServiceString && chosenServiceString.length <= 3) {
    errors.chosenService += 'Choose a Service';
  }

  if (chosenService) {
    const isValidService = serviceOption?.servicesLinks.some((service) => {
      return service.text.toLowerCase() === chosenServiceString;
    });

    if (!isValidService) {
      errors.chosenService += 'Invalid Service';
    }
  }

  if (phoneNumber && typeof phoneNumber === 'string') {
    const isValidPhoneNumber = /^\d+$/.test(phoneNumber);
    if (!isValidPhoneNumber) {
      errors.phone += 'Please enter a valid UK telephone number.';
    }
  }

  const information = {
    clientEmail: email ? String(email) : '',
    clientName: name ? String(name) : '',
    message: message ? String(message) : '',
    chosenService: chosenService ? String(chosenService) : '',
    phoneNumber: phoneNumber ? String(phoneNumber) : '',
    subject,
  };

  return { errors, information };
};