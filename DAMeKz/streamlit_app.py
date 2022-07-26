from turtle import color
import streamlit as st
from streamlit.components.v1 import html 
import altair as alt

import pandas as pd
import numpy as np
import joblib

CSS_PATH = 'example.css'

pipe = joblib.load(open("models/pipe_lr_0x4788.pkl","rb"))
    

def get_prediction(text):
    results = pipe.predict([text])
    return results[0]

def get_predict_proba(text):
    results = pipe.predict_proba([text])
    return results

def main():
    st.title("천하무적 뇌절 대회")

    with st.form(key='sentiment_clf'):
        raw_text = st.text_area("Write Here")
        submit_text = st.form_submit_button(label='Submit')
    
    if submit_text:
        col1, col2 = st.columns(2)

        prediction = get_prediction(raw_text)
        probability = get_predict_proba(raw_text)

        with col1:
            st.success("Original Text")
            st.write(raw_text)

            st.success("Prediction")
            st.write(prediction)
            st.write("확률:%.2f"%(np.max(probability)))

        with col2:
            st.success("Probability")
            
            prob_df = pd.DataFrame(probability,columns=pipe.classes_)
            # st.write(prob_df)
            prob_df = prob_df.T.reset_index()
            prob_df.columns = ['캐릭터','확률']

            fig = alt.Chart(prob_df).mark_bar().encode(x='캐릭터',y='확률')
            st.altair_chart(fig,use_container_width=True)


def background_styling():
    with open(CSS_PATH) as f:
        st.markdown(f'<style>{f.read()}</style>',unsafe_allow_html=True)


if __name__=='__main__':
    background_styling()
    main()