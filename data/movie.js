const movie = [
    {
        id: 1,
        name: "The Intern",
        director: "Nancy Meyers",
        detail: "เบน วิทเทเกอร์ (รอเบิร์ต เดอ นิโร) ชายวัย 70 ปี ผู้ไม่ต้องการใช้ชีวิตหลังเกษียณให้หมดไปวันๆ เขาจึงมาสมัครเป็นพนักงานฝึกหัดในบริษัทเว็บไซต์ด้านแฟชั่น ซึ่งก่อตั้งและบริหาร โดย จูลส์ ออสติน (แอนน์ แฮททาเวย์) เบน ได้รับมอบหมายให้เป็นเด็กฝึกงานในทีมของ จูลส์ เจ้าของบริษัทสาวรุ่นใหม่ไฟแรงที่แทบจะไม่มีเวลาว่างเลย การได้กลับมาทำงานของเบน ทำให้เขาได้พบกับสังคมใหม่ของคนหนุ่มสาวที่เต็มไปด้วยความเร่งรีบและสะดวกสบายด้วยเทคโนโลยี",
        cover: "https://m.media-amazon.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_.jpg",
        download: "",
        lunch: "",
    },
    {
        id: 2,
        name: "The Shawshank Redemption",
        director: "Frank Darabont",
        detail: "",
        cover: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        dowload: "",
        lunch: "",
    },
    {
        id: 3,
        name: "The Umbrella Academy",
        director: "Steve Blackman",
        detail: "เบน วิทเทเกอร์ (รอเบิร์ต เดอ นิโร) ชายวัย 70 ปี ผู้ไม่ต้องการใช้ชีวิตหลังเกษียณให้หมดไปวันๆ เขาจึงมาสมัครเป็นพนักงานฝึกหัดในบริษัทเว็บไซต์ด้านแฟชั่น ซึ่งก่อตั้งและบริหาร โดย จูลส์ ออสติน (แอนน์ แฮททาเวย์) เบน ได้รับมอบหมายให้เป็นเด็กฝึกงานในทีมของ จูลส์ เจ้าของบริษัทสาวรุ่นใหม่ไฟแรงที่แทบจะไม่มีเวลาว่างเลย การได้กลับมาทำงานของเบน ทำให้เขาได้พบกับสังคมใหม่ของคนหนุ่มสาวที่เต็มไปด้วยความเร่งรีบและสะดวกสบายด้วยเทคโนโลยี",
        cover: "https://f.ptcdn.info/376/070/000/qee1feaipa4kmRZ3GrQ-o.jpg",
        dowload: "",
        lunch: "2015",
    },
    {
        id: 4,
        name: "The Intern",
        director: "Nancy Meyers",
        detail: "เบน วิทเทเกอร์ (รอเบิร์ต เดอ นิโร) ชายวัย 70 ปี ผู้ไม่ต้องการใช้ชีวิตหลังเกษียณให้หมดไปวันๆ เขาจึงมาสมัครเป็นพนักงานฝึกหัดในบริษัทเว็บไซต์ด้านแฟชั่น ซึ่งก่อตั้งและบริหาร โดย จูลส์ ออสติน (แอนน์ แฮททาเวย์) เบน ได้รับมอบหมายให้เป็นเด็กฝึกงานในทีมของ จูลส์ เจ้าของบริษัทสาวรุ่นใหม่ไฟแรงที่แทบจะไม่มีเวลาว่างเลย การได้กลับมาทำงานของเบน ทำให้เขาได้พบกับสังคมใหม่ของคนหนุ่มสาวที่เต็มไปด้วยความเร่งรีบและสะดวกสบายด้วยเทคโนโลยี",
        cover: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2022/02/Business-Proposal-SBS-Poster-1-07022022.jpg?resize=750%2C1121&ssl=1",
        dowload: "",
        lunch: "2015",
    },
    {
        id: 5,
        name: "อูยองอู ทนายอัจฉริยะ",
        director: "ยูอินซิก",
        etail: "เบน วิทเทเกอร์ (รอเบิร์ต เดอ นิโร) ชายวัย 70 ปี ผู้ไม่ต้องการใช้ชีวิตหลังเกษียณให้หมดไปวันๆ เขาจึงมาสมัครเป็นพนักงานฝึกหัดในบริษัทเว็บไซต์ด้านแฟชั่น ซึ่งก่อตั้งและบริหาร โดย จูลส์ ออสติน (แอนน์ แฮททาเวย์) เบน ได้รับมอบหมายให้เป็นเด็กฝึกงานในทีมของ จูลส์ เจ้าของบริษัทสาวรุ่นใหม่ไฟแรงที่แทบจะไม่มีเวลาว่างเลย การได้กลับมาทำงานของเบน ทำให้เขาได้พบกับสังคมใหม่ของคนหนุ่มสาวที่เต็มไปด้วยความเร่งรีบและสะดวกสบายด้วยเทคโนโลยี",
        cover: "https://image.bestreview.asia/wp-content/uploads/2022/07/series-extraordinary-attorney-woo-ex-01.jpg",
        dowload: "",
        lunch: "2015",
    },
    {
        id: 6,
        name: "Her Private Life",
        director: "ฮงจงซาน",
        etail: "เบน วิทเทเกอร์ (รอเบิร์ต เดอ นิโร) ชายวัย 70 ปี ผู้ไม่ต้องการใช้ชีวิตหลังเกษียณให้หมดไปวันๆ เขาจึงมาสมัครเป็นพนักงานฝึกหัดในบริษัทเว็บไซต์ด้านแฟชั่น ซึ่งก่อตั้งและบริหาร โดย จูลส์ ออสติน (แอนน์ แฮททาเวย์) เบน ได้รับมอบหมายให้เป็นเด็กฝึกงานในทีมของ จูลส์ เจ้าของบริษัทสาวรุ่นใหม่ไฟแรงที่แทบจะไม่มีเวลาว่างเลย การได้กลับมาทำงานของเบน ทำให้เขาได้พบกับสังคมใหม่ของคนหนุ่มสาวที่เต็มไปด้วยความเร่งรีบและสะดวกสบายด้วยเทคโนโลยี",
        cover: "https://i.pinimg.com/originals/bb/3d/d5/bb3dd521f398699d148167f1caf1c49c.jpg",
        dowload: "",
        lunch: "2015",
    }
]

module.exports = movie;