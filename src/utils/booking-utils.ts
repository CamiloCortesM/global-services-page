import { servicesForms } from './service-forms';
import { transformServiceName } from './utils';
import { htmlString } from '@/utils/service-forms';

export const getFormHTMLForService = (service: string): string => {
  return servicesForms[service] || '';
};

export function handleRadioChange() {
  const targetId = this.getAttribute('input-radio-checked');
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const inputElements = targetElement.querySelectorAll('input');
    inputElements.forEach((input) => {
      input.disabled = false;
    });
    targetElement.classList.add('block');
    targetElement.classList.remove('hidden');
  }

  const radios = document.querySelectorAll(
    `input[type="radio"][name="${this.name}"][input-radio-checked]:not(#${this.id})`
  );
  radios.forEach((radio) => {
    const otherTargetId: any = radio.getAttribute('input-radio-checked');
    const otherTargetElement = document.getElementById(otherTargetId);
    if (otherTargetElement) {
      const inputElements = otherTargetElement.querySelectorAll('input');
      inputElements.forEach((input) => {
        input.disabled = true;
      });
      otherTargetElement.classList.remove('block');
      otherTargetElement.classList.add('hidden');
    }
  });
}

export function handlerCounterButton() {
  const inputId = this.getAttribute('data-input-counter');
  const operation = this.getAttribute('data-operation');
  const inputElement = document.getElementById(inputId) as HTMLInputElement;

  if (!inputElement) {
    return;
  }

  let minValue = parseInt(inputElement.min) || 0;
  let value = parseInt(inputElement.value) || 0;

  if (operation === 'increment' && value < 9) {
    inputElement.value = (value + 1).toString();
  } else if (operation === 'decrement' && value > minValue) {
    inputElement.value = (value - 1).toString();
  }
}

export function handleCheckboxChange() {
  const targetId = this.getAttribute('input-option-checked');
  const targetElement = document.getElementById(targetId) as HTMLInputElement;

  if (!targetElement) {
    return;
  }

  const inputElements = targetElement.querySelectorAll('input');

  if (this.checked) {
    inputElements.forEach((input) => {
      input.disabled = false;
    });
    targetElement.classList.add('block');
    targetElement.classList.remove('hidden');
  } else {
    inputElements.forEach((input) => {
      input.disabled = true;
    });
    targetElement.classList.remove('block');
    targetElement.classList.add('hidden');
  }
}

export const validateInputs = (inputs) => {
  inputs.forEach((input) => {
    const label = input.nextElementSibling;
    if (!input.reportValidity()) {
      if (input.classList.contains('hidden')) {
        label?.classList.add('border-red-500');
      } else {
        input.classList.add('border-red-500');
      }
    } else {
      if (input.classList.contains('hidden')) {
        label?.classList.remove('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    }
  });
};

const generateServiceInfoText = (formDataObject) => {
  let text = '';

  for (const key in formDataObject) {
    text += `${key.replace('_', ' ')}: ${formDataObject[key]}\n`;
  }

  return text;
};

export const generateText = (formDataObject) => {
  const {
    select_service,
    name,
    zipcode,
    address,
    email,
    date,
    phone,
    preferable_time,
    message,
    ...formService
  } = formDataObject;
  let text = 'Global Service & Maintenance,\n\n';
  text += 'Please find below the details of the new booking:\n\n';

  text += `Service: ${select_service}\n`;
  text += `Name: ${name}\n`;
  text += `Zipcode: ${zipcode}\n`;
  text += `Address: ${address}\n`;
  text += `Email: ${email}\n`;
  text += `Date: ${date}\n`;
  text += `Phone: ${phone}\n`;
  text += `Preferable Time: ${preferable_time}\n`;
  text += `Additional Notes: ${message}\n\n`;

  const serviceInfoText = generateServiceInfoText(formService);
  text += serviceInfoText + '\n\n';

  return text;
};

export const saveInfoAndRedirect = (status: boolean) => {
  const path = window.location.pathname;
  const info = {
    path,
    status,
  };
  window.localStorage.setItem('Info', JSON.stringify(info));
  window.location.href = `/email-status`;
};

const generateServiceInfoHTML = (serviceInfo) => {
  let html = '';

  for (const key in serviceInfo) {
    if (serviceInfo.hasOwnProperty(key)) {
      const value = serviceInfo[key];
      html += `<p style="font-size: 16px; line-height: 24px; margin: 16px 0;" id="field_${transformServiceName(
        key
      )}"><b>${key.replace('_', ' ')}: </b>${value}</p>`;
    }
  }

  return html;
};

export const generateManipulatedHtml = (formDataObject) => {
  const {
    select_service,
    name,
    zipcode,
    address,
    email,
    date,
    phone,
    preferable_time,
    message,
    ...formService
  } = formDataObject;

  const tempElement = document.createElement('html');
  tempElement.innerHTML = htmlString;

  tempElement.querySelector('#field_service')!.innerHTML = select_service;

  const fields = {
    name: '#field_name',
    zipcode: '#field_zipcode',
    address: '#field_address',
    email: '#field_email',
    date: '#field_date',
    phone: '#field_phone',
    preferable_time: '#field_preferableTime',
    message: '#field_notes',
  };

  Object.entries(fields).forEach(([key, selector]) => {
    tempElement.querySelector(selector)!.innerHTML = `<b>${
      key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')
    }: </b>${formDataObject[key]}`;
  });

  tempElement.querySelector('#service_information_field')!.innerHTML =
    generateServiceInfoHTML(formService);

  return tempElement.outerHTML;
};

export const addDetailToSummary = (title: string, value: string) => {
  const detailElement = document.createElement('p');
  detailElement.classList.add(
    'flex',
    'items-center',
    'text-sm',
    'text-gray-500'
  );
  detailElement.innerHTML = `
    <span class="font-semibold mr-1">${title}:</span> ${value}
  `;
  const resumeServiceDetails = document.querySelector(
    '#resume_service_details'
  );
  resumeServiceDetails!.appendChild(detailElement);
};
