/* eslint-disable no-plusplus */
import { FormValues } from 'interfaces/incident';

export const validateForm = (formValues: FormValues) => {
  const errors: { message: string } = { message: '' };
  let hasError = false;

  Object.keys(formValues).forEach((key) => {
    switch (key) {
      case 'date':
        if (!formValues.date) {
          errors.message = 'Date is required';
          hasError = true;
        }
        break;

      case 'incidentType':
        if (!formValues.incidentType) {
          errors.message = 'Incident type is required';
          hasError = true;
        }
        break;

      case 'unite':
        if (!formValues.unite) {
          errors.message = 'le nom de lunite is required';
          hasError = true;
        }
        break;

      case 'location':
        if (!formValues.location) {
          errors.message = 'Location is required';
          hasError = true;
        }
        break;

      case 'heure':
        if (!formValues.heure) {
          errors.message = 'heure is required';
          hasError = true;
        }
        break;

        case 'region':
        if (!formValues.region) {
          errors.message = 'region is required';
          hasError = true;
        }
        break;

        case 'province':
        if (!formValues.province) {
          errors.message = 'province is required';
          hasError = true;
        }
        break;

        case 'ville':
        if (!formValues.ville) {
          errors.message = 'ville is required';
          hasError = true;
        }
        break;

        case 'victimfds':
        if (!formValues.victimfds) {
          errors.message = 'victim fds is required';
          hasError = true;
        }
        break;

        case 'victimcivil':
        if (!formValues.victimcivil) {
          errors.message = 'victimcivil is required';
          hasError = true;
        }
        break;

        case 'victimhani':
        if (!formValues.victimhani) {
          errors.message = 'victimhani is required';
          hasError = true;
        }
        break;

        case 'blessefds':
        if (!formValues.blessefds) {
          errors.message = 'blessefds is required';
          hasError = true;
        }
        break;

        case 'blessecivil':
        if (!formValues.blessecivil) {
          errors.message = 'blessecivil is required';
          hasError = true;
        }
        break;

        case 'equipementperdu':
        if (!formValues.equipementperdu) {
          errors.message = 'equiperdu is required';
          hasError = true;
        }
        break;

        case 'equipmentrecup':
        if (!formValues.equipementrecup) {
          errors.message = 'equiprecup is required';
          hasError = true;
        }
        break;

        case 'commentaire':
        if (!formValues.commentaire) {
          errors.message = 'commentaire is required';
          hasError = true;
        }
        break;

        case 'totalami':
        if (formValues.victimcivil && formValues.victimfds) {
          formValues.totalami= formValues.victimfds+formValues.victimcivil;
        }
        break;

      default:
        hasError = false;
    }
  });

  return { hasError, errors };
};

export const hasChanged = (initialValues: FormValues, currentValues: FormValues) => {
  const initialValuesArray = Object.values(initialValues);
  const currentValuesArray = Object.values(currentValues);
  for (let i = 0; i < initialValuesArray.length; i++) {
    if (initialValuesArray[i] !== currentValuesArray[i]) {
      return true;
    }
  }
  return false;
};