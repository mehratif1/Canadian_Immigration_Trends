from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dariareichkina:@localhost:5432/project3'
db = SQLAlchemy(app)

class Years_menu(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    year = db.Column(db.String(65), nullable = False)
    

class Province_menu(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    province = db.Column(db.String(65), nullable = False)
    

class Immigration(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    year = db.Column(db.Integer, nullable = False)
    province = db.Column(db.String(65), nullable = False)
    immigrants_count = db.Column(db.Integer, nullable = False)
    #longtitude = db.Column(db.Float, nullable = False)
    #latitude = db.Column(db.Float, nullable = False)
    def to_dict(self):
        return {"id": self.id, "year": self.year, "province": self.province, "immigrants_count": self.immigrants_count}

class Mort_value(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    year = db.Column(db.Integer, nullable = False)
    geo = db.Column(db.String(65), nullable = False)
    value = db.Column(db.Float, nullable = False)
    def to_dict(self):
        return {"id": self.id, "year": self.year, "geo": self.geo, "value": self.value}

class Avr_house_price(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    date = db.Column(db.Integer, nullable = False)
    avg_price = db.Column(db.Integer, nullable = False)

    def to_dict(self):
        return {"id": self.id, "date": self.date, "avg_price": self.avg_price}


class Income(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    ref_date = db.Column(db.Integer, nullable = False)
    geo = db.Column(db.String(65), nullable = False)
    value = db.Column(db.Integer, nullable = False)
    def to_dict(self):
        return {"id": self.id, "ref_date": self.ref_date, "geo": self.geo, "value": self.value}

class Construction(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    Data = db.Column(db.Integer, nullable = False)
    province = db.Column(db.String(65), nullable = False)
    centre = db.Column(db.String(65), nullable = False)
    total = db.Column(db.Float, nullable = False)
    longtitude = db.Column(db.Float, nullable = False)
    latitude = db.Column(db.Float, nullable = False)
    def to_dict(self):
        return {"id": self.id, "data": self.Data, "province": self.province, "centre": self.centre, "total": self.total, "longtitude": self.longtitude, "latitude": self.latitude}
    

@app.route('/', methods=['GET', 'POST'])
def index():
    unique_years = db.session.query(Years_menu.year).distinct().order_by(Years_menu.year.asc()).all()
    unique_provinces = db.session.query(Province_menu.province).distinct().order_by(Province_menu.province.asc()).all()
    selected_year = None
    selected_province = None
    selected_province_line_chart = None
    if request.method == 'POST':
        if request.form.get('Year'): 
            selected_year = request.form.get('Year')
            selected_province = request.form.get('Province')
        if request.form.get('ProvinceLineChart'):
            selected_province_line_chart = request.form.get('ProvinceLineChart')

    else:
        selected_year = unique_years[0][0]
        selected_province = unique_provinces[0][0]
    
    construction_query = Construction.query.filter_by(Data=selected_year, province=selected_province)
    immigrations_query = Immigration.query.filter_by(year=selected_year, province=selected_province)

    # selected_province_line_chart
    construction_query = Construction.query.filter_by(Data=selected_year, province=selected_province)
    avg_house_prices = Avr_house_price.query.all()
    immigrations = immigrations_query.all()
    incomes_query = None 
    
    if selected_province_line_chart and selected_province_line_chart != 'All':
        incomes_query = Income.query.filter_by(geo=selected_province_line_chart)
        mort_value_query = Mort_value.query.filter_by(geo=selected_province_line_chart)
    else:
        incomes_query = Income.query
        mort_value_query = Mort_value.query

    incomes = incomes_query.all()
    construction = construction_query.all()
    mort_value = mort_value_query.all()
    
    return render_template("index.html", 
                           unique_years=unique_years, 
                           unique_provinces=unique_provinces, 
                           selected_year=selected_year,
                           selected_province=selected_province,
                           selected_province_line_chart=selected_province_line_chart,
                           avg_house_prices = [entry.to_dict() for entry in avg_house_prices],
                           immigrations = [entry.to_dict() for entry in immigrations],
                           incomes = [entry.to_dict() for entry in incomes],
                           construction = [entry.to_dict() for entry in construction],
                           mort_value = [entry.to_dict() for entry in mort_value]
                           )

@app.route('/avg_housing_prices')
def avg_housing_prices():
    avg_house_prices = Avr_house_price.query.all()
    data = [entry.to_dict() for entry in avg_house_prices]
    # Return the data as JSON
    return jsonify({"avg_house_prices": data})

@app.route('/immigration')
def immigration():
    immigration = Immigration.query.all()
    data = [entry.to_dict() for entry in immigration]
    # Return the data as JSON
    return jsonify({"immigration": data})

@app.route('/mort_value')
def mort_value():
    mort_value = Mort_value.query.all()
    data = [entry.to_dict() for entry in mort_value]
    # Return the data as JSON
    return jsonify({"mort_value": data})

@app.route('/income')
def income():
    income = Income.query.all()
    data = [entry.to_dict() for entry in income]
    # Return the data as JSON
    return jsonify({"income": data})

@app.route('/construction')
def construction():
    construction = Construction.query.all()
    data = [entry.to_dict() for entry in construction]
    # Return the data as JSON
    return jsonify({"construction": data})

if __name__ == "__main__":
    app.run(debug = True)


    
