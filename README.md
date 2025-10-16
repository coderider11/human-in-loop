                                 ------Sheet Happens :P-----------

**Architecture:**


<img width="1493" height="918" alt="image" src="https://github.com/user-attachments/assets/4cc12da0-187d-4eb8-81fa-34391cf6f961" />


<img width="1497" height="917" alt="image" src="https://github.com/user-attachments/assets/2586ece6-cd03-4f32-ab72-ee79e66ba75e" />


**Description**: This is the human in loop system for timesheet submissions

Start by running the docker compose in human-in-loop-system project by editing .env file  for from email id


**.env file** 

create .env file in  the same directory as docker-compose with following

**SMTP_USER**={YOUR TEST SMTP USER EMAILID}

**SMTP_PASSWORD**={YOUR TEST SMTP USER PASSWORD}

**SMTP_HOST**={YOUR TEST SMTP HOST}

**SMTP_PORT**={YOUR TEST SMTP PWD}

**FROM_EMAIL**={YOUR TEST FROM USER EMAILID}

<img width="612" height="310" alt="image" src="https://github.com/user-attachments/assets/9daa56d6-0ca6-4522-868d-ddf97e2db521" />

**docker-compose file**

<img width="407" height="722" alt="image" src="https://github.com/user-attachments/assets/021bb040-22c4-48a2-9404-0776a0f79eef" />

Docker compose looks like this where in mongodb will be created for store records
Once the localhost:5678 is opened in browser you will be able to see 

**Main workflow**￼
<img width="1425" height="598" alt="image" src="https://github.com/user-attachments/assets/08aa4187-42ce-45e4-8ec3-edab4519c165" />


**Sub workflow**
<img width="1673" height="546" alt="image" src="https://github.com/user-attachments/assets/1f5b54d6-42db-4d5a-b719-9ee1e62e0cd7" />
On configured date in the schedule trigger automation starts 
Ex: cron for testing is * * * * *


**Outputs after running**￼
<img width="1459" height="375" alt="image" src="https://github.com/user-attachments/assets/c8845a35-a967-43c6-99c6-cc69352fa98b" />
<img width="941" height="555" alt="image" src="https://github.com/user-attachments/assets/9fb6deed-b369-4336-82e5-87a5c99060e4" />
<img width="904" height="763" alt="image" src="https://github.com/user-attachments/assets/a48df804-1dbc-45c7-8694-3d589597b1ea" />
<img width="817" height="450" alt="image" src="https://github.com/user-attachments/assets/75838c5b-3258-443f-b493-6161181972e1" />




