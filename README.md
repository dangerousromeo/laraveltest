Description

The following web app lists the imported CSV file which contains product details, The system consist of a signup and login options initially. Once a user is logged in to the home page, they should be able to import the product CSV and view the imported products in the home page itself. Only valid CSV file without any validation error will be imported. Once imported it will always shown in the home page.
![image](https://github.com/user-attachments/assets/a6c48448-9188-4a11-b8ab-b1b03cad77e6)
![image](https://github.com/user-attachments/assets/620e5b7b-7fb8-4dc6-9af3-76a431fe307d)
![image](https://github.com/user-attachments/assets/eb24cef3-ea67-4a52-8d19-c2cf938eff25)



Setup

The system is developed using Laravel sanctum as backend and React js as its front end. After cloning the repository do the following.

- Laravel setup
  - Install wamp server or any equivalent software such that php and sql are in place.
  - Checkout to the path Laravel-backend in cmd and run *composer install*.
  - Update the .env variables as you have setuped your database and Laravel domain 
    *FRONTEND\_URL=http://localhost:3000*

    *SESSION\_DOMAIN=localhost*

    *SANCTUM\_STATEFUL\_DOMAINS=localhost:3000*

    *Update the DB connection variables*

  - After update run php artisan config:cache
  - Run php artisan migrate for table creation.
- React setup
  - Install node js and npm in your system
  - Checkout to path react-frontend in cmd and run *npm install*
  - In .env file update the Laravel backend domain *VITE\_BACKEND\_APP\_URL=http://localhost:8888*
  - Run npm run dev the application will be up now
  - A sample csv file can be found in react-frontend/sample path


