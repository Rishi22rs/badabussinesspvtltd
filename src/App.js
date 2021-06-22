import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import MyCarousel from "./components/MyCarousel";

import full1 from "./assets/full1.jpg";
import drpic from "./assets/drpic.png";
import drvpic from "./assets/drvpic.png";
import ent from "./assets/ent.png";
import stu from "./assets/stu.png";

import comp1 from "./assets/comp01.png";
import comp2 from "./assets/comp02.png";
import comp3 from "./assets/comp03.png";
import comp4 from "./assets/comp04.png";
import comp5 from "./assets/comp05.png";
import comp6 from "./assets/comp06.png";
import comp7 from "./assets/comp07.png";
import comp8 from "./assets/comp08.png";
import comp9 from "./assets/comp09.png";
import comp10 from "./assets/comp10.png";
import comp11 from "./assets/comp11.png";
import comp12 from "./assets/comp12.png";
import comp13 from "./assets/comp13.png";
import comp14 from "./assets/comp14.png";
import comp15 from "./assets/comp15.png";
import comp16 from "./assets/comp16.png";
import comp17 from "./assets/comp17.png";
import comp18 from "./assets/comp18.png";
import comp19 from "./assets/comp19.png";
import comp20 from "./assets/comp20.png";
import comp21 from "./assets/comp21.png";
import comp22 from "./assets/comp22.png";
import comp23 from "./assets/comp23.png";
import comp24 from "./assets/comp24.png";
import comp25 from "./assets/comp25.png";
import comp26 from "./assets/comp26.png";
import comp27 from "./assets/comp27.png";
import comp28 from "./assets/comp28.png";
import comp29 from "./assets/comp29.png";
import comp30 from "./assets/comp30.png";
import comp31 from "./assets/comp31.png";
import comp32 from "./assets/comp32.png";
import comp33 from "./assets/comp33.png";
import comp34 from "./assets/comp34.png";
import comp35 from "./assets/comp35.png";
import comp36 from "./assets/comp36.png";
import comp37 from "./assets/comp37.png";
import comp38 from "./assets/comp38.png";
import comp39 from "./assets/comp39.png";
import comp40 from "./assets/comp40.png";
import comp41 from "./assets/comp41.png";
import comp42 from "./assets/comp42.png";
import comp43 from "./assets/comp43.png";
import comp44 from "./assets/comp44.png";
import comp45 from "./assets/comp45.png";
import comp46 from "./assets/comp46.png";
import comp47 from "./assets/comp47.png";
import comp48 from "./assets/comp48.png";
import comp49 from "./assets/comp49.png";
import comp50 from "./assets/comp50.png";
import comp51 from "./assets/comp51.png";
import comp52 from "./assets/comp52.png";
import comp53 from "./assets/comp53.png";
import comp54 from "./assets/comp54.png";
import comp55 from "./assets/comp55.png";
import comp56 from "./assets/comp56.png";
import comp57 from "./assets/comp57.png";

import c2p1 from "./assets/c2p1.png";
import c2p2 from "./assets/c2p2.png";
import c2p3 from "./assets/c2p3.png";
import c2p4 from "./assets/c2p4.png";
import c2p5 from "./assets/c2p5.png";
import c2p6 from "./assets/c2p6.png";
import c2p7 from "./assets/c2p7.png";
import c2p8 from "./assets/c2p8.png";
import c2p9 from "./assets/c2p9.png";
import c2p10 from "./assets/c2p10.png";

import TableHolder from "./components/TableHolder";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

import InfiniteCarousel from "react-leaf-carousel";
import Footer from "./components/Footer";

import c1p1 from "./assets/c1p1.png";
import c1p2 from "./assets/c1p2.png";
import c1p3 from "./assets/c1p3.png";
import c1p4 from "./assets/c1p4.png";
import c1p5 from "./assets/c1p5.png";
import c1p6 from "./assets/c1p6.png";
import c1p7 from "./assets/c1p7.png";

import tv from "./assets/tv.png";
import p2 from "./assets/2.png";
import p3 from "./assets/3.png";
import p4 from "./assets/4.png";
import p5 from "./assets/5.png";
import p6 from "./assets/6.png";
import p7 from "./assets/7.png";
import p8 from "./assets/8.png";
import p9 from "./assets/9.png";
import p10 from "./assets/10.png";
import p11 from "./assets/11.png";
import p12 from "./assets/12.png";
import p13 from "./assets/13.png";
import p14 from "./assets/14.png";
import p15 from "./assets/15.png";
import p16 from "./assets/16.png";
import p17 from "./assets/17.png";
import p18 from "./assets/18.png";
import p19 from "./assets/19.png";
import p20 from "./assets/20.png";
import p21 from "./assets/21.png";
import p22 from "./assets/22.png";
import p23 from "./assets/23.png";
import p24 from "./assets/24.png";
import p25 from "./assets/25.png";
import p26 from "./assets/26.png";
import p27 from "./assets/27.png";
import p28 from "./assets/28.png";
import p29 from "./assets/2801.png";
import p30 from "./assets/2802.png";
import p31 from "./assets/2803.png";
import p32 from "./assets/2804.png";
import p33 from "./assets/2805.png";
import p34 from "./assets/2806.png";
import p35 from "./assets/2807.png";
import p36 from "./assets/2808.png";
import p37 from "./assets/2809.png";
import p38 from "./assets/2810.png";
import p39 from "./assets/2811.png";
import p40 from "./assets/2812.png";
import p41 from "./assets/2813.png";
import p42 from "./assets/2814.png";
import p43 from "./assets/2815.png";
import p44 from "./assets/2816.png";
import p45 from "./assets/2817.png";
import p46 from "./assets/2818.png";
import p47 from "./assets/2819.png";

const data0 = [
  {
    pic: c1p1,
    desc: "Learn From Industry Leaders Who Have Built Billion Dollar Businesses.",
  },
  {
    pic: c1p2,
    desc: "5 Days Of Live Sessions With Dr. Vivek Bindra.",
  },
  {
    pic: c1p3,
    desc: "24 Digital Live Sessions And Q&A With Dr. Vivek Bindra.",
  },
  {
    pic: c1p4,
    desc: "25 Business Strategy Frameworks From Leadership Funnel Program.",
  },
  {
    pic: c1p5,
    desc: "240 Premium And Exclusive Videos.",
  },
  {
    pic: c1p6,
    desc: "240 Most Powerful ARTICLES AND PPTs To Enhance Your Learnings.",
  },
  {
    pic: c1p7,
    desc: "240 Assessments To Keep Track Of Your Learnings.",
  },
];

function App() {
  const data = [
    {
      pic: c2p1,
      desc: "Sales",
    },
    {
      pic: c2p2,
      desc: "Marketing",
    },
    {
      pic: c2p3,
      desc: "Finance",
    },
    {
      pic: c2p4,
      desc: "Human Resource",
    },
    {
      pic: c2p5,
      desc: "Legal",
    },
    {
      pic: c2p6,
      desc: "Information Technology",
    },
    {
      pic: c2p7,
      desc: "Digital Marketing",
    },
    {
      pic: c2p8,
      desc: "Retail",
    },
    {
      pic: c2p9,
      desc: "Execution",
    },
    {
      pic: c2p10,
      desc: "Strategy",
    },
  ];

  const data2 = [
    {
      pic: tv,
      name: "Mr. T.V. Mohandas Pai",
      pos: "Chairman - Manipal Global/Ex Infosys CFO",
      desc: "T.V. Mohandas Pai Is The Chairman Of Manipal Global Education. He Was A Former Director Of Infosys And Head – Administration, Education And Research, Financial, Human Resources Of Infosys Leadership Institute. He Is An Astute Investor And Has Invested In More Than 8 Tech Startups In India. He Was The First Investor In Byju's Which Is Today The Most Valued EdTech Startup In The World With Approximately USD 4 Billion Valuation.Read Less",
    },
    {
      pic: p2,
      name: "Mr. Alfred Ford",
      pos: "Chairman - Ford Motors",
      desc: "Mr. Alfred Ford Is The Global Chairman Of Ford Motors And Great Grandson Of The Legendary Sir Henry Ford. He Is An Initiated Disciple Of A.C. Bhaktivedanta Swami Prabhupada (Srila Prabhupada) Since 1974 Period. Read Less",
    },
    {
      pic: p3,
      name: "Dr. Kiran Maz,umdar Shaw",
      pos: "Chairperson - Biocon Ltd",
      desc: "Kiran Mazumdar-Shaw Is An Indian Billionaire Entrepreneur. She Is The Chairperson And ManAging Director Of Biocon Limited, A Biotechnology Company Based In Bangalore, India And The Chairperson Of Indian Institute Of Management, Bangalore. The Company Is Valued At Approximately USD 5 Billion.Read Less",
    },
    {
      pic: p4,
      name: "Mr. R S Sodhi",
      pos: "Managing Director - Amul",
      desc: "Shri R S Sodhi Is Presently Managing Director Of Amul, The Largest Milk And Milk-Based ProDucts Company In India. The Group Has A Turnover Of Approximately Rs. 50,000 Crores. He Has Been With Amul For More Than 35 Years And Has Spearheaded Their Highly Innovative And Widely Acclaimed Marketing Campaigns. He Has Been Instrumental In Launching More Than 50 New Products During His Tenure As Managing Director From 2012 Onwards.Read Less",
    },
    {
      pic: p5,
      name: "Mr. Manu Jain",
      pos: "Managing Director - Xiaomi India",
      desc: "Mr. Manu Jain, India Head And Global Vice President Of Xiaomi. He Was Also The Co - FoundeR Of Jabong. In Xiaomi He Has Been Responsible To Take The Brand To Highest Market Share In Android Phones Beating Samsung And Other Companies In Record Time.Read Less",
    },
    {
      pic: p6,
      name: "Mr. Yashish Dahiya",
      pos: "Co-Founder & CEO - PolicyBazaar",
      desc: "Mr. Yashish Dahiya, CEO & Co-Founder, PolicyBazaar.Com Which Is The Largest Online InsUrance Brokerage Company In India With More Than 15,000 Employees And Growing At 100% Per Annum In Revenue Terms. Holds A Bachelor’s Degree In Engineering From IIT Delhi, MBA From IIM Ahmedabad, And An MBA From INSEAD. He Started His Career As A Business Unit Head At Illinois Tool Works And Later Moved On To Bain & Co. To Work As A Management Consultant…Read Less",
    },
    {
      pic: p7,
      name: "Mr. Girish Agarwal",
      pos: "Founder Director - Dainik Bhaskar Group",
      desc: "Mr. Girish Agarwal Is The Founder Director Of Dainik Bhaskar Group. DB Has A Circulation OF 58 Lakh Newspapers Daily With 4.5 Crore Readership. They Are The Largest Newspaper Group In India And The 4th Largest In The World.Read Less",
    },
    {
      pic: p8,
      name: "Dr. Arvind Lal",
      pos: "Chairman - Dr. Lal Pathlabs",
      desc: "Dr. Arvind Lal Is The Founder Of Dr. Lal Pathlabs, He Has Grown His Company On The Hub AnD Spoke Model. Today His Company Is Listed And Is The Largest Company In India In The Pathlab Industry With More Than 9,000 Crore Market Cap.Read Less",
    },
    {
      pic: p9,
      name: "Acharya Balkrishna",
      pos: "Chairman - Patanjali",
      desc: "Acharya Balkrishna, Is The Current Chairman Of Patanjali, The Largest Home Grown Brand In FMCG In India. His Personal Wealth Has Been Estimated As USD 6.1 Billion. He Is Responsible For The Operations Of The Patanjali Group. He Has A Strong Nationalist Feeling And Wants The Group To Become The Largest FMCG Brand In The Country.Read Less",
    },
    {
      pic: p10,
      name: "Mr. P.K. Gupta",
      pos: "Managing Director - SBI",
      desc: "Mr. PK Gupta Is The Managing Director Of State Bank Of India, He Has Spent More Than 33 YeArs In State Bank Of India. He Is On The Board Of SME Committee Of Reserve Bank Of India. With His Vast Experience He Is Now Responsible For The Next Level Of Growth Of SBI I.E. Digital Banking.Read Less",
    },
    {
      pic: p11,
      name: "Dr. Devi Shetty",
      pos: "Founder - Narayana Health",
      desc: "Padmabhushan, PadmaVibhushan Dr. Devi Shetty Is The Chairman Of Narayana Hrudaylaya. His ORganisation Does 30 Heart Transplants Everyday And Has Halved The Cost Of The Transplant. He Is Compared With Sir Henry Ford Who Was The Founder Of The Assembly Line. His Mission Is To Further Halve The Cost Of Cardiac Surgery In India.Read Less",
    },
    {
      pic: p12,
      name: "Mr. Keki Mistry",
      pos: "Vice Chairman & CEO - HDFC Ltd.",
      desc: "Mr. Keki Mistry Is The Vice - Chairman Of HDFC Ltd. HE Has Been With The Group For More ThAn 30 Years And Has Succeeded Mr. Deepak Parekh Who Is Still The Non Executive Chairman Of HDFC Ltd. He Is Also On The Board As Independent Director Of Sun Pharma, IIFL, HCL Technologies And Many Others.Read Less",
    },
    {
      pic: p13,
      name: "Mr. Ashish Chauhan",
      pos: "Managing Director & CEO - Bombay Stock Exchange",
      desc: "He Is An IIT, IIM Alumnus And Was The Head Of National Stock Exchange When It Was Founded. He Has A Vision Of Listing 1,00,000 Companies On BSE SME Exchange.Read Less",
    },
    {
      pic: p14,
      name: "Mr. Ridham Desai",
      pos: "Managing Director - Morgan Stanley India",
      desc: "Mr. Ridham Desai Is The Managing Director Of Morgan Stanley India. He Is A Well-Known FiguRe In Equity Research And His Expertise Is To Understand Trends Of Macroeconomy. Mr. Desai Has More Than 20 Years Experience In Identifying Macroeconomic Trends And Helping Businesses Identify The Next Sunrise Sector.Read Less",
    },
    {
      pic: p15,
      name: "Mr. Nirmal Jain",
      pos: "Chairman - India Infoline Limited",
      desc: "Mr. Nirmal Jain Is The Chairman Of The Largest Indian Financial Conglomorate INDIA INFOLINE LTD. IIFL Provides Loans, Mutual Funds, Insurance And Every Possible Financial Product. The Company Is Listed And Has A Market Cap Of Approximately 15,000 Crores.Read Less",
    },
    {
      pic: p16,
      name: "Mr. Deepak Bagla",
      pos: "Managing Director & CEO - Invest India",
      desc: "Mr. Bagla Is Currently Managing Director & CEO Of Invest India, The National Investmen... Read More",
    },
    {
      pic: p17,
      name: "Ms. Kalpana Saroj",
      pos: "Chairperson - Kamani Tubes",
      desc: "Padmabhushan Ms. Kalpana Saroj Is The Chairperson Of Kamani Tubes. She Once Belonged To A Very Poor Family And Was Married At A Very Early Age. However, After A Difficult Marriage And Attempts To Commit Suicide, Today, She Has Transformed Her Life And Turned Around A Sick Company Called Kamani Tubes Into A Profitable Venture. She Has The Reputation Of Being An Iron Lady And Is An Inspiration To Many, She Is Also On The Board Of IIM Bangalore And Is An Owner Of A Rs. 3,000 Crore Empire.Read Less",
    },
    {
      pic: p18,
      name: "Mr. Sanjiv Bajaj",
      pos: "Vice Chairman - Bajaj Capital",
      desc: "Mr. Sanjiv Bajaj Is The Managing Director Of Bajaj Capital. Bajaj Capital Is One Of The LaRgest Distributors Of Financial Products With More Than 100 Company Products In Their Portfolio.Read Less",
    },
    {
      pic: p19,
      name: "Mr. Boman Irani",
      pos: "Film Actor",
      desc: "Mr. Boman Irani Is An Indian Actor Who Has Worked In Many Successful Movies Such As 3 IdioTs, Jolly LLB, Munnabhai M.B.B.S And Many More. From A Very Humble Beginning, He Has Become A Superstar. In His Case, Age Doesn't Matter And He Is Loved By One And All.Read Less",
    },
    {
      pic: p20,
      name: "Mr. Vivek Oberoi",
      pos: "Film Actor / Businessman / Investor",
      desc: "Mr. Vivek Oberoi Is An Indian Actor Who Has Worked In Many Successful Movies Such As CompaNy, Dum, Saathiya, Shootout At Lokhandwala And PM Modi. He Is Also An Avid Investor And Businessman And Has Invested In 28 Companies.Read Less",
    },
    {
      pic: p21,
      name: "Mr. Rajkumar Rao",
      pos: "Film Actor",
      desc: "Mr. Rajkumar Rao Is An Indian Actor Who Has Worked In Many Successful Movies Such As Kai PO Che, Queen, Made In China, Stree Etc.Read Less",
    },
    {
      pic: p22,
      name: "Mr. Sanjeev Kapoor",
      pos: "MasterChef India and Co-Founder WonderChef",
      desc: "Mr. Sanjeev Kapoor Is A Celebrity Chef And Became Popular With Khana Khazana. Today He OwnS More Than 5 Restaurant Brands And More Than 70 Restaurants Across The World. He Is Also The Co-Founder Of Wonder Chef Which Manufactures Kitchen Appliances Industry And Has Rapidly Grown In Its Space.Read Less",
    },
    {
      pic: p23,
      name: "Mr. Prahlad Kakkar",
      pos: "Indian Ad Film Guru",
      desc: "Mr. Prahlad Kakkar Is An Ad Maker And Considered As The Ad Film Guru Of India. He Has Been Known For His Famous For His Ad Campaigns Such As Pepsi, Maggi, Britannia, Maggi Ketchup And Many Others. He Also Runs A School Of Entrepreneurship And Addresses Students To Pacify Their Fears. Works Against The Fear Engulfing The Students Of Today.Read Less",
    },
    {
      pic: p24,
      name: "Dr. Mahesh Gupta",
      pos: "Chairman - Kent RO",
      desc: "Dr. Mahesh Gupta Is The Chairman Of Kent RO, Leader In The Water Purifier Industry. His CoMpany Is The Leading Brand In The Purification Of Water And Foods With A Mission Of Cleanliness In All Food Forms. He Has Built The Entire Company Without Any Form Of External Capital.Read Less",
    },
    {
      pic: p25,
      name: "Mr. Lalit Agarwal",
      pos: "Chairman & Managing Director - V - Mart",
      desc: "Mr. Lalit Agarwal Is The Managing Director Of V-Mart, The Country's Most Affordable FashioN Retail Chain. Starting From A Very Humble Backgound, Mr. Lalit Has Made An Organisation Par Excellence By Focusing Only On Tier 3 & 4 Markets And By Providing Aspirational Fashion At Very Low Cost.Read Less",
    },
    {
      pic: p26,
      name: "Mr. Ram Chandra Agarwal",
      pos: "Chairman - V2 Retail",
      desc: "Mr. Ram Chandra Agarwal Is The Chairman Of V2 Retail And Was The Founder Of Vishal Mega MaRt. After The Failure Of Vishal Mega Mart, He Founded V2 Retail And Within 10 Years, V2 Now Has 76 Stores.Read Less",
    },
    {
      pic: p27,
      name: "Dr. A Velumani",
      pos: "Chairman - Thyrocare Technologies",
      desc: "Dr. A Velumani Is A BSc In Chemistry, MSc In Biochemistry And A PhD In Thyroid Physiology. He Has Over 35 Years Of Experience In Diagnostics Research And Business. After 15 Years Of Experience In Thyroid Biochemisry Research At The BARC Mumbai, He Started Thyrocare In 1995. This Is A Focused Biochemistry Back End Laboratory. He Has Built An Organisation Which Got Listed In The National Stock Exchange In May 2017, With A Stellar Oversubscription Of 74 Times.Read Less",
    },
    {
      pic: p28,
      name: "Mr. Ramesh Agarwal",
      pos: "Chairman - Agarwal Packers and Movers",
      desc: "Mr. Ramesh Agarwal Is The Chairman Of Agarwal Packers And Movers.The Name Is Synonymous th The Movement Of Household Goods. They Are The Leaders And Innovators In Their Own Field. Their Innovation Has Brought Down Costs Of Shifting Significantly And Improved Their Margins. With More Than 1,00,000 Shiftings In A Year, They Are The Undisputed Market Leaders.Read Less",
    },
    {
      pic: p29,
      name: "Mr. Rajesh Mehta",
      pos: "Chairman - Rajesh Exports",
      desc: "A Listed Company With More Than Rs 15,000 Crore Market Cap. This Is The Only Company In ThE World Which Has Interests Ranging Right From Mining To Retailing In Gold Segment. With 2 Lakh Crore Annual Revenue, Rajesh Exports Is One Of The 7 Companies In India Which Are Included In Fortune 500.Read Less",
    },
    {
      pic: p30,
      name: "Mr. Sajjan Bhajanka",
      pos: "Chairman - CenturyPly & Star Cement",
      desc: "Mr. Sajjan Bhajanka Is The Chairman Of Century Ply & Star Cement. With More Than Rs. 9,000 Crores Of Combined Market Capitalisation, These Companies Are Leaders In Their Business. Century Ply Is The Market Leader With More Than Rs. 2,000 Crore Of Revenue.Read Less",
    },
    {
      pic: p31,
      name: "Mr. Sunil Kanoria",
      pos: "Vice Chairman - SREI Infra",
      desc: "Mr. Sunil Kanoria Is The Vice Chairman Of SREI Infra Which Is The Biggest Firm In India In The Field Of Equipment Financing. They Have Approximately 33% Market Share And Have Rs. 50,000 Crores Of Assets Under Management. With More Than 1,00,000 Customers, The Firm Boasts Of The Largest Consumer Base In The Industry And Has The Maximum OEM Partnerships.Read Less",
    },
    {
      pic: p32,
      name: "Mr. Vikaas Gutgutia",
      pos: "Founder & Managing Director - Ferns & Petals",
      desc: "Mr. Vikaas Gutgutia Is The Founder & MD Of Ferns & Petals. It Is The Largest CompaNy In The World For Flower Gifting. It Has More Than 320 Shops In More Than 170 Countries And Has A Topline Of More Than 350 Crores. It Provides End-To-End Solutions For Weddings And Large Events.Read Less",
    },
    {
      pic: p33,
      name: "Mr. Ashwani Arora",
      pos: "Managing Director & CEO - LT Foods (Dawat Rice)",
      desc: "A Listed Company Which Is Well- Known With Its Rice Brand, Dawat Rice. The Company Has MorE Than Rs 4,000 Crores Of Revenue. It Has More Than 60% Exports And Has Converted A Trading Business Into A Super Brand.Read Less",
    },
    {
      pic: p34,
      name: "Mr. Abhishek Somany",
      pos: "Managing Director - Somany Ceramics Ltd.",
      desc: "Mr. Abhishek Somany Is The Managing Director Of Somany Ceramics Ltd. He Is A 3rd GeneratioN Entrepreneur And His Company Has Been In The Top Two Companies In The Ceramics Space.Read Less",
    },
    {
      pic: p35,
      name: "Dr. Ajay Sahai",
      pos: "Director General - Federation of Indian Export Organisations",
      desc: "Dr. Ajay Sahai, Director General & CEO Of FIEO. He Has More Than 30 Years Of ExperiencE In Commerce And Trade. He Is A Policy Influencer And Has Been Instrumental In Creating Foreign Trade Policy. He Is A Speaker On Multiple Platforms Such As World Bank, Asian Development Bank Etc.Read Less",
    },
    {
      pic: p36,
      name: "Mr. Nikhil Arora",
      pos: "Managing Director - GoDaddy India",
      desc: "Mr. Nikhil Arora Is The Managing Director (India) Of The Largest Domain Registration CompaNy In The World. He Has Done His Master's From USA And Has Worked At Senior Leadership Roles In Large Organisations In The World Such As WeWork. At Godaddy, He Is Responsible For Expansion And Education Of SME's Regarding Domain And Website Development. Godaddy Has Almost 40% Market Share In India.Read Less",
    },
    {
      pic: p37,
      name: "Mr. Rajesh Agarwal",
      pos: "Managing Director - Insecticide India",
      desc: "He Is A Pioneer In The Field Of Pesticide Industry And Has Provided High Quality Products At Very Low Cost To The Indian Farmers. His Company Is Listed With More Than Rs 1,000 Crores Of Annual Revenue And Has Worked With More Than 25 Lakh Farmers.Read Less",
    },
    {
      pic: p38,
      name: "Mr. Sumit Malhotra",
      pos: "Managing Director - Bajaj Corp. Ltd.",
      desc: "Mr. Sumit Malhotra Is The Managing Director Of Bajaj Corp. Ltd. With Only One Product, Mr. Sumit Malhotra Has Created A Rs 1,000-Crore Business. The Product, Bajaj Almond Hair Oil Is A Market Leader With More Than 10% Market Share In The Hair Oil Industry And 63% In Light Hair Oil Industry.Read Less",
    },
    {
      pic: p39,
      name: "Mr. Rajesh Sharma",
      pos: "Managing Director - Capri Global Ltd",
      desc: "Mr. Rajesh Sharma Is The Managing Director Of Capri Global Ltd. The Company Has Been Into The Lending Business For More Than 20 Years And Has Given Funds To More Than 5,000 MSMEs To Grow Their Businesses.Read Less",
    },
    {
      pic: p40,
      name: "R. Gopalakrishnan",
      pos: "Former Executive Director - Tata Sons Ltd.",
      desc: "R. Gopalakrishnan Is An Executive Director Of Tata Sons Ltd. He Also Serves As A Director On The Board Of Tata Power, Tata Technologies, AkzoNobel India, Castrol India And ABP Pvt. Ltd. He Has Served As Vice Chairman - Hindustan Unilever And Chairman - Unilever Arabia. Author Of 9 High Power Books.Read Less",
    },
    {
      pic: p41,
      name: "Mr. Sanjay Gupta",
      pos: "Chairman - APL Apollo",
      desc: "Mr. Sanjay Gupta Is A First Generation Entrepreneur And A Category Creator Of Steel Tubes In India. He Is The Managing Director Of APL Apollo Tubes. His Vision Is To Replace The Usage Of Wood In Order To Save Trees. In Steel Tubes They Have More Than 50% Market Share And Have Succesfully Grown Their Business And Today Their Company Is Listed.Read Less",
    },
    {
      pic: p42,
      name: "Mr. R G Agarwal",
      pos: "Chairman - Dhanuka Agritech",
      desc: "Shri Ram Gopal Agarwal Group Chairman Is The Founder Chairman Of Dhanuka Agritech Ltd. He Holds Degree In Bachelor Of Commerce (Hons) From Sri Ram College Of Commerce, Delhi University. He Is A Decisive pic:p2,And Action Oriented Visionary Who Took Over A Sick Pesticide Company Named Northern Minel Pvt. Ltd. In 1980 To Transform It Into 1,000 Crore. Presently The Company Has More Than 350 Products, The Company's Market Cap Is More Than Rs. 1,200 Crores.Read Less",
    },
    {
      pic: p43,
      name: "Mr. Hari Om Rai",
      pos: "Chairman - Lava Mobiles",
      desc: "Mr. Hari Om Rai Is A First Generation Entrepreneur And The Managing Director Of Lava MobilEs. In An Era When Most Of The Indian Manufacturers Are Struggling Due To Low Cost Chinese Options, Lava Mobiles Has Held Its Ground And Is At Par With Samsung In Feature Phone Category.Read Less",
    },
    {
      pic: p44,
      name: "Mr. Radhey Shyam Dixit",
      pos: "Chairman - Ananda Dairy",
      desc: "Mr. Radhey Shyam Dixit Is The Chairman Of Ananda Dairy. Ananda Dairy Is One Of The Few ComPanies Which Procures Directly From Farmers And Also Has Its Own Products. They Are Pioneers In Improving The Milk Yield For The Farmers.Read Less",
    },
    {
      pic: p45,
      name: "Dr. Jayshree Vyas",
      pos: "Managing Director - Shree Mahila Sewa Sahakari Bank",
      desc: "Ms. Jayshree Vyas, A Professionally Qualified Chartered Accountant Has Been Working As The Managing Director Of Shree Mahila Sewa Sahakari Bank, Ahmedabad Since 1986 Which Has More Than 5,00,000 Women Clients. She Has Taken Active Steps To Introduce And Operate An Integrated Micro Insurance Scheme For Women Working In The Informal Sector And In A Short Period Of Three Years Covered More Than 150,000 Women. She Is Also Board Member Of Bombay Stock Exchange (BSE).Read Less",
    },
    {
      pic: p46,
      name: "Mr. Atul Chaturvedi",
      pos: "Vice Chairman - Shree Renuka Sugars Ltd",
      desc: "Mr. Atul Chaturvedi Is The Vice Chariman Of Shree Renuka Sugars Ltd. And On The Board Of MUltiple Adani Group Companies. Shree Renuka Sugars Is Having A Revenue Of More Than 4,000 Crores Per Year With Interest In Sugar, Ethanol And Power.Read Less",
    },
    {
      pic: p47,
      name: "Mr. Amit Jain",
      pos: "Co-Founder - Ashika Wealth Advisors",
      desc: "Amit Served The Indian Banking And Financial Services Industry For 18 Years. In His Last ASsignment He Served Reliance Capital Group Company As Business Head For India Region. He Has Been Part Of Reliance Group's Leadership Team For Almost A Decade. He Has Mentored Startups From IIT, DTU, IIM, DU. He Has Worked With HDFC, ICICI And ABN AMRO Bank.",
    },
  ];

  const data3 = [
    comp1,
    comp2,
    comp3,
    comp4,
    comp5,
    comp6,
    comp7,
    comp8,
    comp9,
    comp10,
    comp11,
    comp12,
    comp13,
    comp14,
    comp15,
    comp16,
    comp17,
    comp18,
    comp19,
    comp20,
    comp21,
    comp22,
    comp23,
    comp24,
    comp25,
    comp26,
    comp27,
    comp28,
    comp29,
    comp30,
    comp31,
    comp32,
    comp33,
    comp34,
    comp35,
    comp36,
    comp37,
    comp38,
    comp39,
    comp40,
    comp41,
    comp42,
    comp43,
    comp44,
    comp45,
    comp46,
    comp47,
    comp48,
    comp49,
    comp50,
    comp51,
    comp52,
    comp53,
    comp54,
    comp55,
    comp56,
    comp57,
  ];
  return (
    <>
      <TopNav />
      <MyCarousel />
      <div className="container">
        <img className="img-fluid my-img" src={full1} alt="full1" />
        <TableHolder data={data0} />
        <div className="dr">
          <img src={drpic} alt="drpic" />
          <ul>
            <li>
              Convenience to Attend the Course Anytime, Anywhere from your{" "}
              <b>Base Location.</b>
            </li>
            <li>
              Subject matter experts from <b>World's best Universities.</b>
            </li>
            <li>
              Generate <b>Business Leads</b> for Yourself.
            </li>
          </ul>
        </div>
        <div className="table">
          <h1>TOPICS TO BE COVERED</h1>
          <div className="row">
            {data.map((x, key) => (
              <Card2 key={key} data={x} />
            ))}
          </div>
        </div>
        <div className="table">
          <h1>WHO WILL TEACH YOU</h1>
          <div className="table-content" style={{ background: "none" }}>
            <img src={drvpic} alt="drvpic" />
            <div>
              <p className="name">Dr. Vivek Bindra</p>
              <p className="founder">Founder & CEO - Bada Business</p>
              <p className="desc">
                Dr Vivek Bindra Is A Revolutionary Entrepreneur, An
                Internationally Acclaimed Motivational Speaker And A Business
                Coach. A Trusted Advisor For More Than 500+ Corporate Houses And
                Entrepreneurs, He Is The Recipient Of More Than 100 Globally
                Admired Awards.
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>
          <div className="row">
            {data2.map((x, key) => (
              <Card3 data={x} />
            ))}
          </div>
        </div>
        <div className="table">
          <h1>FOR ENTREPRENEURS / PROFESSIONALS</h1>
        </div>
        <img
          style={{ marginTop: "40px" }}
          src={ent}
          alt="ent"
          className="img-fluid  rounded mx-auto d-block"
        />
        <div className="table">
          <h1>FOR ENTREPRENEURS / PROFESSIONALS</h1>
          <img
            style={{ marginTop: "40px" }}
            src={stu}
            alt="stu"
            className="img-fluid  rounded mx-auto d-block "
          />
        </div>
      </div>
      <div className="sati">
        <div className="table" style={{ marginBottom: 40, marginTop: 20 }}>
          <h1>OUR SATISFIED CLIENTS</h1>
        </div>
        <InfiniteCarousel
          arrows={false}
          autoCycle={true}
          pauseOnHover={false}
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={8}
          scrollOnDevice={true}
        >
          {data3.map((x, key) => (
            <div key={key}>
              <img className="co-img" alt="" src={x} />
            </div>
          ))}
        </InfiniteCarousel>
      </div>
      <Footer />
    </>
  );
}

export default App;
