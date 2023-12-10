# Import the dependencies.
import pandas as pd
from flask import Flask, jsonify , render_template

app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/")
def homepage():
    """List of all the files."""
    return render_template ("index.html")
       
      #   f"Immigrants<br/>"
      #   f"Construction<br/>"
      #   f"Income<br/>"
      #   f"Mortgage<br/><end>"
        
    

# @app.route("/Immigrants")
# def Immigrants():
#    Immigrants_data = pd.read_csv("static/data/Immigrants.csv")
#    return jsonify(Immigrants_data.to_dict())

@app.route("/Immigrants")
def Immigrants():
    df= pd.read_csv('static/data/Immigrants.csv')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))


# @app.route("/Construction")
# def Construction():
#    Construction_data = pd.read_csv("static/data/Construction.csv")
#    return jsonify(Construction_data.to_dict())

@app.route("/Construction")
def Construction():
    df= pd.read_csv('static/data/Construction.csv')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))


# @app.route("/Income")
# def Income():
  
#    Income_data = pd.read_("static/data/Income.xlsx")
#    return jsonify(Income_data.to_dict())

@app.route("/Income")
def Income():
    df= pd.read_excel('static\data\Income.xlsx')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))


# @app.route("/Mortgage")
# def Mortgage():
#    Mortgage_data = pd.read_csv("static/data/Mortgages.csv")
#    return jsonify(Mortgage_data.to_dict())

@app.route("/Mortgage")
def Mortgage():
    df= pd.read_csv('static/data/Mortgages.csv')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))






if __name__=="__main__":
    app.run(debug=True)
