import { getCookie } from "cookies-next";
import parse from "html-react-parser";
import FormData from "form-data";
import moment from "moment";
import http from "./http";
import toast from "react-hot-toast";
// import FormData from "form-data";
// import variables from "styles/globals.module.scss";

export function doObjToFormData(obj) {
  let formData = new FormData();
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (let [keyv, value] of Object.entries(obj[key])) {
        formData.append(key + "[]", JSON.stringify(value));
      }
    } else {
      if (typeof obj[key] == "object") {
        formData.append(key, JSON.stringify(obj[key]));
      } else {
        if(obj[key] !== null && obj[key] !== undefined){
          formData.append(key, obj[key]);

        }
      }
    }
  }
  return formData;
}

export function doObjToFormDataWithBlob(obj) {
  let formData = new FormData();
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (let [keyv, value] of Object.entries(obj[key])) {
        formData.append(key + "[]", JSON.stringify(value));
      }
    } else {
      if (typeof obj[key] == "object") {
        if (key === "video") {
          formData.append(key, obj[key], "Interview-Video.mp4");
        }else{
          formData.append(key, JSON.stringify(obj[key]));
        }


        
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
}


export function doObjToFormDataWithoutString(obj) {
  var formData = new FormData();
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (let [keyv, value] of Object.entries(obj[key])) {
        formData.append(key + "[]", value);
      }
    } else {
      if (typeof obj[key] == "object") {
        formData.append(key, obj[key]);
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
}

export function doFirstUpperRestLower(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export function doParseHTML(string) {
  return parse(string);
}

export function eventDateFormat(date) {
  return moment(date).format("DD, MMMM YYYY");
}

export function eventTimeFormat(time) {
  return moment(time, "HHmm").format("hh:mm A");
}

export function eventTimeFormatNew(time) {
  return moment(time, "HHmm").format("hh A");
}

export function onlyDayThreeletters(date) {
  return moment(date).format("ddd");
}

export function onlyDateTwoletters(date) {
  return moment(date).format("DD");
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function nowPlus6Days() {
  let days = [];
  let daysRequired = 7;

  for (let i = 0; i <= daysRequired; i++) {
    days.push(moment().add(i, "days").format("YYYY-MM-DD"));
  }
  return days;
}


export function cmsFileUrl(src, folder = "images") {
  if (src === null || src === undefined || src === '') {
    return '/images/no-image.svg';
  }
  else {
    return `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}storage/${folder}/${src}`;
  }
}


export function timeAgo(date) {
  const momentDate = moment(date);
  const diff = moment().diff(momentDate);

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diff < minute) {
    return "Just now";
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (diff < year) {
    const months = Math.floor(diff / month);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diff / year);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}

export function format_amount(amount, size = 0) {
  amount = parseFloat(amount);
  return amount >= 0
    ? `$${numberFormat(amount, size)}`
    : `$(${numberFormat(Math.abs(amount), size)})`;
}

function numberFormat(amount, size) {
  // You can customize the number formatting logic here if needed
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: size,
    maximumFractionDigits: size,
  }).format(amount);
}

export function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

export function replaceSpacesWithDashes(text) {
  // Use a regular expression to replace spaces with dashes
  return text.replace(/\s+/g, '-');
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0
}


export function formatNumber(num, size = 6) {
  return `L&P${num.toString().padStart(size, '0')}`;
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  

  return `${day} ${month} ${year}`;
}

export function blogDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  

  return `${month} ${day}, ${year}`;
}

export function checkForEmptyValues(data) {
  for (const key in data) {
    if (data[key] === null || data[key] === "") {
      return key; // Return the key with the empty/null value
    }
  }
  return false; // Return null if no empty/null values are found
}

export function isArrayEmpty(arr) {
  return arr.length === 0;
}

export function getArrayCount(arr) {
  return arr.length;
}

export function getObjKeyCount(obj){
  return Object.keys(obj).length;
};

export function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${day} ${month} ${year} | ${formattedHours} : ${formattedMinutes}`;
}

export function subscriptionStatus(status) {
  // console.log(typeof(status));
  if(status == 'active'){
    return <span className="badge rounded-pill bg-success">Active</span>
  }else if(status == 'non-renewing'){
    return <span className="badge rounded-pill bg-warning">Non Renewing</span>

  }else{
    return <span className="badge rounded-pill bg-danger">Cancelled</span>
  }

}

export function bytesToMegaBytes(bytes) {
  return bytes / (1024 * 1024);
}

export async function FileUpload(event, type = 'attchments', file_name) {
  const fd = new FormData();
  fd.append("file", event);
  fd.append("type", type);
  fd.append("file_name", file_name);

  return http.post("upload-file", fd).then((res) => {
      return res.data;
  });
}
export async function uploadMultiFiles(event, type) {
  let newImages = [];
  let images_arr = event.target.files;
  for (let i = 0; i < images_arr.length; i++) {
      let fileSize = images_arr[i].size;
      let fileName = images_arr[i].name;

      let sizeMb = bytesToMegaBytes(fileSize);
      if (sizeMb < 40) {
          let image = await FileUpload(images_arr[i], type, fileName).then((data) => {
              // console.log("uploadMultiFiles", data)
              if (data.file != undefined && data?.status === 1) {
                  newImages.push({ file: data.file, file_name: data?.file_name_text });
              }
              else if (data?.status === 0) {
                toast.error(data?.msg);
                   return;
              }
          });
      }
  }
  return newImages;

}

export const convertNumberFormatToUnits = (value) => {
  if (Math.abs(value) >= 1e9) {
    // Value is in billions
    return (value / 1e9).toFixed(1) + 'B';
  } else if (Math.abs(value) >= 1e6) {
    // Value is in millions
    return (value / 1e6).toFixed(1) + 'M';
  } else if (Math.abs(value) >= 1e3) {
    // Value is in thousands
    return (value / 1e3).toFixed(1) + 'K';
  } else {
    // Value is less than 1000
    return value.toString();
  }
};

export function formatDateTimeWithTimezone(dateTimeString) {
  const date = new Date(dateTimeString);

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };

  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  const formattedDateTime = dateTimeFormat.formatToParts(date);

  const day = formattedDateTime.find(part => part.type === 'day').value;
  const month = formattedDateTime.find(part => part.type === 'month').value;
  const year = formattedDateTime.find(part => part.type === 'year').value;
  const hours = formattedDateTime.find(part => part.type === 'hour').value;
  const minutes = formattedDateTime.find(part => part.type === 'minute').value;

  // Calculate GMT offset
  const timeZoneOffset = date.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
  const offsetMinutes = Math.abs(timeZoneOffset) % 60;

  // Format the GMT offset
  const gmtOffset = `GMT${timeZoneOffset >= 0 ? '-' : '+'}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;

  return `${day} ${month} ${year} | ${hours}:${minutes} ${gmtOffset}`;
}


export function getDocumentsStatus(status) {
  // console.log(typeof(status));
  if(status == 'requested'){
    return <span className="badge grey">Requested</span>
  }else if(status == 'under_review'){
    return <span className="badge blue">Under review</span>

  }else if(status == 'pending'){
    return <span className="badge yellow">Pending</span>

  }else if(status == 'approved'){
  <span className="badge green">Approved</span>
  }else{
    return <span className="badge grey">Requested</span>
  }

}

export function getSubsStatus(status) {
  // console.log(typeof(status));
  if(status == 'trialing'){
    return <span className="badge blue">Trail</span>
  }else if(status == 'active'){
    return <span className="badge greeb">Active</span>

  }else if(status == 'pending'){
    return <span className="badge yellow">Pending</span>

  }else if(status == 'approved'){
  <span className="badge green">Approved</span>
  }else{
    return <span className="badge grey">Loading...</span>
  }

}

export function getFileExtension(filename){

    const parts = filename?.split(".");
    return parts[parts.length - 1]?.toLowerCase();
  
}

export const formatNumbertoZeroPadding = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

export const makeExternalUrl = (url) => {
  if (!url.startsWith('https')) {
    url = 'https://' + url;
  }
  return url;
}

export function getPlanInterval(interval) {
  // console.log(typeof(status));
  if(interval == "3_month"){
    return "3 Months"
  }else if(interval == '12_month'){
    return "12 Months"

  }else{
    return "Nill"
  }

}

export function TickOrCross(status, style) {
  // console.log(typeof(status));
  if(status == 1 || status == "1"){
    return <span className={style?.tick}></span>
  }else{
    return <span className={style?.cross}></span>
  }
}

export function TextOrCross(text, style) {
    // console.log(typeof(status));
    if(text == "x" || text == "X"){
      return <span className={style?.cross}></span>
    }else{
      return text;
    }

}

let is_console = true;
export function consoleLog(item) {
  if (is_console) {
    console.log(item);
  }
}

export function getItemCondition(status) {
  // console.log(typeof(status));
  if(status == 'New'){
    return "New";
  }else if(status == 'Ex-display-machine'){
    return "Ex-display machine";
  }else if(status == 'Used'){
    return "Used";
  }else if(status == 'Defective'){
    return "Defective";
  }

}

export const removeSpace = (str) => {
  const ws = str.replace(/ +/g, "");
  return ws
}

export function getNotiifcationType(status) {
  // console.log(typeof(status));
  if(status == 'view'){
    return "New View";
  }else if(status == 'inquery'){
    return "New Inquery Request";
  }else if(status == 'contact_click'){
    return "New Click on Phone / Whatsapp";
  }else {
    return "New Notifiaction";
  }

}