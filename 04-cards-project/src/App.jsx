// import React from 'react'
// import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import jobOpenings from "./components/info_1.json" ;

  const App =()=>{
    // console.log(jobOpenings);

//     const jobOpenings = [
//   {
//     "brandLogo": "https://imgs.search.brave.com/rbh7pRnJ8Kh25nP02zCkvtQXBainO9_vApWJoGrpQMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MzU1Lzc4NC9zbWFs/bC9nb29nbGUtbG9n/by1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLWZyZWUtcG5n/LnBuZw",
//     "companyName": "Google",
//     "datePosted": "5 days ago",
//     "post": "Frontend Developer",
//     "tags": "Full Time",
//     "tag2": "Junior Level",
//     "pay": "$35/hr",
//     "location": "Mumbai, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/yQDQt2FkloIYigzwri4CYYiD4pIZHbJdHEt0-B0gDWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/ODkyLzY4Mi9zbWFs/bC9taWNyb3NvZnQt/bG9nby1pY29uLWVk/aXRvcmlhbC1mcmVl/LXZlY3Rvci5qcGc",
//     "companyName": "Microsoft",
//     "datePosted": "2 weeks ago",
//     "post": "React Developer",
//     "tags": "Full Time",
//     "tag2": "Mid Level",
//     "pay": "$42/hr",
//     "location": "Bangalore, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/mOhKkr2E43lqETY3Ker_NN8CdP_dE-lSssUvMWWdryI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzg5/LzM2MF9GXzI5NDUx/ODk0MF9GQmZ3Wncz/MEhuV0JWOXB6RHA2/RUV2OXUxODVKTDZY/US5qcGc",
//     "companyName": "Amazon",
//     "datePosted": "3 days ago",
//     "post": "Backend Developer",
//     "tags": "Full Time",
//     "tag2": "Senior Level",
//     "pay": "$55/hr",
//     "location": "Hyderabad, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/u1Uqc8jkRSSmpNDivzHqVvO5f5q5XbyBCzw3_wOuW_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
//     "companyName": "Netflix",
//     "datePosted": "1 week ago",
//     "post": "UI/UX Designer",
//     "tags": "Part Time",
//     "tag2": "Junior Level",
//     "pay": "$28/hr",
//     "location": "Delhi, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/KX9lQYmGMvZRZeOxgq3gz-84WBhU3PzszozkeMODMNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
//     "companyName": "Meta",
//     "datePosted": "10 days ago",
//     "post": "Full Stack Developer",
//     "tags": "Full Time",
//     "tag2": "Senior Level",
//     "pay": "$60/hr",
//     "location": "Pune, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/pae-kDsZpqvwKZcDcnHTveNjoQlSZ5nlOdMi7CSKVL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1sb2dvLTE5MTA2/MzM3LmpwZw",
//     "companyName": "Apple",
//     "datePosted": "4 weeks ago",
//     "post": "iOS Developer",
//     "tags": "Contract",
//     "tag2": "Mid Level",
//     "pay": "$50/hr",
//     "location": "Chennai, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/6K953pSshIqUXHLYLWaEbnVyqmfcxEj1-AAQIdkSvlc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92YXVs/dC5jb20vX25leHQv/aW1hZ2U_dXJsPWh0/dHBzOi8vbWVkaWEy/LnZhdWx0LmNvbS8x/NDM0MzYxMy8yMTA5/MDlfc3BvdGlmeV9s/b2dvLnBuZyZ3PTM4/NCZxPTc1",
//     "companyName": "Spotify",
//     "datePosted": "6 days ago",
//     "post": "Product Designer",
//     "tags": "Remote",
//     "tag2": "Senior Level",
//     "pay": "$48/hr",
//     "location": "Remote"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/Gc34kelv8NskQK51FjE_jPm6Jrx-rJveYktvbYliyqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvQWRvYmUtTG9n/by03MDB4Mzk0LnBu/Zw",
//     "companyName": "Adobe",
//     "datePosted": "2 days ago",
//     "post": "Software Engineer",
//     "tags": "Full Time",
//     "tag2": "Junior Level",
//     "pay": "$38/hr",
//     "location": "Noida, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/7WaO-OjQFZs3nBNki_WLEQSXEUBSitalo5tKcZlppx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA0/L09yYWNsZS1Mb2dv/LTEtNTAweDI4MS5w/bmc",
//     "companyName": "Oracle",
//     "datePosted": "8 weeks ago",
//     "post": "Java Developer",
//     "tags": "Full Time",
//     "tag2": "Mid Level",
//     "pay": "$45/hr",
//     "location": "Gurugram, India"
//   },
//   {
//     "brandLogo": "https://imgs.search.brave.com/luZqG5AXVj6l79kk6l2p_S1iVqEzZM1asGngliGVFms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA0L3NhbGVzZm9y/Y2UtbG9nby0wLnBu/Zw",
//     "companyName": "Salesforce",
//     "datePosted": "12 days ago",
//     "post": "DevOps Engineer",
//     "tags": "Full Time",
//     "tag2": "Senior Level",
//     "pay": "$58/hr",
//     "location": "Kolkata, India"
//   }
// ];

    return(
      <div className='parent' >
        {jobOpenings.map((elem,idx)=>{
          // console.log(idx)
          return <div key={idx}>
            <Card  brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tags={elem.tags} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
        })}
     </div>
  )
} 

export default App
