from flask import render_template, request, redirect, session, url_for
from main import app
from anilist_api import (
    get_popular_animes,
    get_trending_animes,
    get_seasonal_animes,
    get_all_animes
)

def template_vars(**kwargs):
    return dict(
        usuario=session.get('usuario'),
        isLogged=('usuario' in session),
        **kwargs
    )

@app.route('/')
def homepage():
    populares = get_popular_animes()
    trends = get_trending_animes()
    temporada = get_seasonal_animes()
    return render_template(
        'homepage.html',
        **template_vars(populares=populares, trends=trends, temporada=temporada)
    )

@app.route('/animes')
def all_animes():
    animes = get_all_animes()
    return render_template(
        'animes.html',
        **template_vars(animes=animes)
    )

@app.route('/minha-lista')
def my_list():
    return render_template('minha-lista.html', **template_vars())

# -------------------- LOGIN / CADASTRO --------------------

@app.route('/perfil')
def profile():
    if 'usuario' not in session:
        return redirect(url_for('login_page'))
    return render_template('perfil.html', **template_vars())

@app.route('/login')
def login_page():
    return render_template('login.html', **template_vars())

@app.route('/login', methods=['POST'])
def login_action():
    email = request.form['email']
    senha = request.form['senha']

    # TROCA O BANCO DE DADOS AQUI 
    if email == "teste@gmail.com" and senha == "123":
        session['usuario'] = {"email": email, "nome": "Usuário Teste"}
        return redirect(url_for('profile'))

    return redirect(url_for('login_page'))

#CADASTRO

@app.route('/cadastro')
def cadastro_page():
    return render_template('cadastro.html', **template_vars())

@app.route('/cadastro', methods=['POST'])
def cadastro_action():
    # seu backend vai salvar no banco
    return redirect(url_for('login_page'))

# ------------------------
# LOGOUT
# ------------------------
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('homepage'))