Canadian Immigration Trends by Province

Goals
Express Main Trends: Illustrate key trends in the immigration process and its impact on businesses.
Visual Appeal: Present immigration data in an accessible and visually appealing manner.

Task
Create an interactive dashboard featuring maps and charts using Flask, D3.js, and Leaflet.js.

Steps
1. Data Gathering

Utilize resources such as the Bank of Canada, CMHC (Canada Mortgage and Housing Corporation), and the Government of Canada Statistics website.

2. ETL Process with Pandas

Employ Pandas for Extract, Transform, and Load (ETL) operations, encompassing data acquisition, cleaning, transformation, merging, and loading.
ETL Process
<img width="1417" alt="Screenshot 2023-12-12 at 16 33 03" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/642ce950-5259-475c-a1bf-00710421fc20">
<img width="1359" alt="Screenshot 2023-12-12 at 16 34 30" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/0f6d1ba9-12d5-40c5-91db-7256326d2664">

3. Database Creation in Postgres

Establish a PostgreSQL database to store the processed data.
Database Creation
<img width="1066" alt="Screenshot 2023-12-12 at 16 35 16" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/64457202-9b7e-4a30-8f39-e7e0bbc63900">

4. Flask and SQLAlchemy

Develop a Flask application using SQLAlchemy for efficient interaction with the PostgreSQL database.
Flask and SQLAlchemy
<img width="946" alt="Screenshot 2023-12-12 at 16 44 58" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/c1932d13-5be6-4b51-8fd2-b76a10fb157a">

5. HTML, D3.js, and Leaflet.js Scripts

Craft HTML scripts along with D3.js and Leaflet.js scripts for compelling visualizations.
<img width="1027" alt="Screenshot 2023-12-12 at 17 00 05" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/18bd7fd5-f84b-43f0-8444-6a12e6fcbfd6">

6. Dropdown Menus for Filtering

Implement two dropdown menus for filtering information per year and per province on the map visualization, displaying data on completed constructions and immigrant numbers.
Map Filters
<img width="1257" alt="Screenshot 2023-12-12 at 17 02 04" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/baf20afe-1fff-455b-b20b-10e2ec8f0a81">

Integrate a dropdown menu for filtering information per province on chart visualizations, showcasing average income vs. average housing prices in a LineChart and average mortgage value in a BarChart.
Chart Filters
<img width="1292" alt="Screenshot 2023-12-12 at 17 11 38" src="https://github.com/DariaRiechkina/Project3_Immigration_trends/assets/142356334/ceec967d-020e-437a-9ae2-3706f0ecd466">

