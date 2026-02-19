from flask import Blueprint, render_template

main = Blueprint("main", __name__)


@main.route("/")
def index():
    return render_template("index.html")


@main.route("/projetos")
def projetos():
    return render_template("projetos.html")


@main.route("/contato")
def contato():
    return render_template("contato.html")
