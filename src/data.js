import phone1 from "./images/phones1.jpg";
import phone2 from "./images/phones2.jpg";
import phone3 from "./images/phones3.jpg";
import phone4 from "./images/phone4.jpg";
import phone5 from "./images/phone5.jpg";
import phone6 from "./images/phone6.jpg";



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
      featured: true,
      guarantee:"1 year",
      size:"147.3 x 71.2 x 9.4 mm",
      weigth:"185gr",
      description:"iphone 12 mini 128Gb red",
        images: [
        {
          fields: {
            file: {
              url: phone5
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
      guarantee:"1 year",
      size:"147.3 x 71.2 x 9.4 mm",
      weigth:"195gr",
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
      name: "samsung galaxy A12 Black",
      slug: "samsung-galaxy-a12-128gb-black",
      type: "single",
      price: 429.99,
      memory: 128,
      operatingSystem:"Android",
      featured: true,
      guarantee:"1 year",
      size:"147.3 x 71.2 x 9.4 mm",
      weigth:"185gr",
      description:"samsung galaxy A12 128GB black",
            images: [
        {
          fields: {
            file: {
              url: phone6
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