from io import BytesIO
import mimetypes
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt 

import platform

COLORS = ['lightcoral', 'orange', 'lightgreen', 'skyblue','mediumpurple']

def get_pred_prob_bar(pred_prob):
    if platform.system()=='Windows': # Windows
        plt.rc('font', family='NanumMyeongjo')  
    elif platform.system() == 'Darwin': # MAC 
        plt.rc('font', family = 'AppleGothic') 
    
    plt.rc('font', size = 8)
    plt.rc('axes', unicode_minus = False) 

    prob_ind = ['Bias', 'Pure', 'Gender bias', 'Offensive', 'Gender offensive']
    
    plt.figure(figsize=(5,3))
    res_prob_bar = plt.bar(prob_ind,pred_prob[0],color = COLORS)
    plt.ylim([0,1])
    plt.title('Result Probabilities')

    for num in res_prob_bar:
        height = num.get_height()
        plt.text(num.get_x() + num.get_width()/2.0, height, '%.1f' % (height*100), ha='center', va='bottom', size = 12)

    img = BytesIO()
    plt.savefig(img, format='png',dpi=200)
    img.seek(0)
    return img
    