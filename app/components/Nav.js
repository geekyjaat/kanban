import React from 'react';

import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Nav = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-color">
					<a className="navbar-brand" href="#">
						Kanban
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							{/*<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
  </li>*/}
                {/**<li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
  </li>*/}
							<li className="nav-item">
								<button className="btn btn-outline-primary my-2 my-sm-0" type="button">
									Add Item
								</button>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>
  )
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(Actions, dispatch)
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav))
