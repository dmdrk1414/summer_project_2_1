from os import system
import pandas as pd
import numpy as np
import joblib
import platform
import matplotlib.pyplot as plt
# %matplotlib inline

COLORS = ['lightcoral', 'orange', 'lightgreen', 'skyblue','mediumpurple']

def get_prediction(model,text):
    results = model.predict([text])
    return results[0]

def get_predict_proba(model,text):
    results = model.predict_proba([text])
    return results
