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
       
     

@app.route("/Immigrants")
def Immigrants():
    df= pd.read_csv('static/data/Immigrants.csv')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))



@app.route("/Construction")
def Construction():
    df= pd.read_csv('static/data/Construction.csv')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))



@app.route("/Income")
def Income():
    df= pd.read_excel('static\data\Income.xlsx')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))



@app.route("/Mortgage")
def Mortgage():
    df= pd.read_csv('static/data/Mortgages.csv')
    df1=df.to_json(orient='records')
    df1=pd.read_json(df1)
    return jsonify(df1.to_dict(orient='records'))






if __name__=="__main__":
    app.run(debug=True)
