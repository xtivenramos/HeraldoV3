import React from 'react';

function Header(){
    return(
        <div class="main-header">
            <div class="col-md-12 text-center title">
			    <h1>El Heraldo</h1>
            </div>
            <div class="container">
                <ul class="nav nav-tabs">
                <li class="active col-md-2"><a class="nav-link btn btn-block" href="#">Noticias <span class="glyphicon glyphicon-globe" aria-hidden="true"></span></a></li>
                <li class="col-md-2"><a class="nav-link btn btn-block" href="#">Judiciales</a></li>
                <li class="dropdown col-md-2">
                    <a class="dropdown-toggle btn btn-block" data-toggle="dropdown" href="#">Deporte
                    <span class="glyphicon glyphicon-triangle-bottom"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="#">Futbol <span class="badge bg-success rounded-pill text-dark">News</span></a></li>
                    <li><a href="#">Voleibol</a></li>
                    <li><a href="#">Tenis</a></li>
                    </ul>
                </li>
                <li class="col-md-2"><a class="nav-link btn btn-block" href="#">Clasificados</a></li>
                <li class="col-md-2"><a class="nav-link btn btn-block" href="#">Política</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;