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

def get_pred_prob_bar(pred_prob):
    if platform.system()=='Windows': # Windows
        plt.rc('font', family='NanumMyeongjo')  
    elif platform.system() == 'Darwin': # MAC 
        plt.rc('font', family = 'AppleGothic') 
    
    plt.rc('font', size = 12)
    plt.rc('axes', unicode_minus = False) 

    prob_ind = ['Bias', 'Pure', 'Gender bias', 'Offensive', 'Gender offensive']
    
    plt.figure(figsize=(10,7))
    res_prob_bar = plt.bar(prob_ind,pred_prob[0],color = COLORS)
    plt.ylim([0,1])
    plt.title('Result Probabilities')

    for num in res_prob_bar:
        height = num.get_height()
        plt.text(num.get_x() + num.get_width()/2.0, height, '%.1f' % (height*100), ha='center', va='bottom', size = 12)

    plt.show()

