
# Import the dependencies.
import pandas as pd
from flask import Flask, jsonify

app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/")
def homepage():
    """List of all the files."""
    return (
        f"Immigrants<br/>"
        f"Construction<br/>"
        f"Income<br/>"
        f"Mortgage<br/><end>"
        
    )

@app.route("/Immigrants")
def Immigrants():
   Immigrants_data = pd.read_csv("static/Resources/immigrants_data.csv")
   return jsonify(Immigrants_data.to_dict())

@app.route("/Construction")
def Construction():
   Construction_data = pd.read_csv("static/Resources/construction.csv")
   return jsonify(Construction_data.to_dict())

@app.route("/Income")
def Income():
  
   Income_data = pd.read_excel("static/Resources/income_res.xlsx")
   return jsonify(Income_data.to_dict())

@app.route("/Mortgage")
def Mortgage():
   Mortgage_data = pd.read_csv("static/Resources/Merged_Provinces_Mortgages.csv")
   return jsonify(Mortgage_data.to_dict())

# Process the query results into a dictionary
    

# Return the JSON representation using Flask's jsonify function

if __name__=="__main__":
    app.run()
