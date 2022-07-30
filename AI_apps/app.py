import joblib
from flask import Flask, render_template, request, jsonify, send_file
from ai.utils import get_prediction,get_predict_proba
from article_generator.scraper import NewsScraper
from plots import get_pred_prob_bar

app = Flask(__name__)
model = joblib.load(open("./ai/models/TfidfVec_lr_0x509_xTunning.pkl",'rb'))

@app.route('/',methods=['GET'])
def article_generator():
    news = NewsScraper()
    article = news.get_info()
    return render_template('index.html',article = article)

@app.route('/predict',methods=['POST','GET'])
def predict():
    if request.method=='POST':
        recv_comments = request.form["comments"]
        if recv_comments is None:
            return jsonify({'error':'no answer!'})

    elif request.method =='GET':
        recv_comments = request.args.get('comments')
        if recv_comments is None:
            return jsonify({'error':'no answer!'})        

    try:
        # sent = get_prediction(model,recv_comments)
        pred = get_predict_proba(model, recv_comments)
        # data = {'pred': round(pred.max(),5) ,'sentiment':sent}
        imgs = get_pred_prob_bar(pred)
        return send_file(imgs, mimetype='image/png')
    except:
        return jsonify({'error':'error during prediction!'})        

if __name__ == '__main__':
    app.run(port =1234 , debug=True)