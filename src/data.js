import phone1 from "./images/phones1.jpg";
import phone2 from "./images/phones2.jpg";
import phone3 from "./images/phones3.jpg";
import phone4 from "./images/phone4.jpg";
import phone5 from "./images/phones5.jpg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "iphone 12 mini 128Gb red",
      slug: "iphone-12-mini-128gb-red",
      type: "Iphone",
      price: 2099,
      memory: 128,
      operatingSystem:"IOS 13",
      featured: false,
      description:"iphone 12 mini 128Gb red",
        images: [
        {
          fields: {
            file: {
              url: phone4
            }
          }
        },
        {
            fields: {
              file: {
                url: phone1
              }
            }
          }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "iphone 12 mini 64Gb blue",
      slug: "iphone-12-mini-64gb-blue",
      type: "Iphone",
      price: 1800,
      memory: 64,
      operatingSystem:"IOS 13",
      featured: false,
      description:"iphone 12 mini 64Gb blue",
          images: [
        {
          fields: {
            file: {
              url: phone2
            }
          }
        },  
        {
            fields: {
              file: {
                url: phone1
              }
            }
          }   
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "samsung galaxy A12 128GB red",
      slug: "samsung-galaxy-a12-128gb-red",
      type: "single",
      price: 429.99,
      memory: 128,
      operatingSystem:"IOS 13",
      featured: true,
      description:"samsung galaxy A12 128GB red",
            images: [
        {
          fields: {
            file: {
              url: phone4
            }
          }
        },
        {
            fields: {
              file: {
                url: phone1
              }
            }
          }
      ]
    }
  },

];