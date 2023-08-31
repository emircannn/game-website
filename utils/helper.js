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

  export function seoDesc(desc) {
    function etiketleriTemizle(desc) {
        let div = document.createElement("div");
        div.innerHTML = desc;
        return div.textContent || div.innerText || "";
    }
  
    const temizMetin = etiketleriTemizle(desc);
    return temizMetin.slice(0, 157) + '...'
  }


