import moment from 'moment';
require('moment/locale/tr');

export const dateFormater = (date) => {
  const turkishDateFormat = 'D MMMM YYYY';
  moment.locale('tr'); 
  return moment(date).format(turkishDateFormat);
}

export const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  });

  export const handleSelectImage = (event,setPhoto,setPhotoPre) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPre(reader.result);
    };
    if(selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };