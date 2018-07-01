import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CatalogSearch extends Component {
    static propTypes = {
      onSearch: PropTypes.func.isRequired,
    }

    state = {
      q: this.props.name || '',
      category: this.props.category || '',
      location: this.props.location || '',
      page: this.props.page || '',
      ppage: this.props.ppage || ''
    }

    handleSearch = (e) => {
      e.preventDefault();

      const { name, value } = e.target;
      this.setState({ [name]: value });
      setTimeout(this.handleSave, 300);
    }

    handlePagination = (e) => {
      e.preventDefault();

      const { name, value } = e.target;
      this.setState({ [name]: value });
      setTimeout(this.handleSave, 300);
    }

    handleSave = () => {
      let url;
      if ((this.state.category) && (this.state.location)) {
        url = `https://weconnect02.herokuapp.com/api/v2/businesses/search?q=${this.state.q}&&category=${this.state.category}&&location=${this.state.location}&&limit=6`;
      } else if (this.state.category) {
        url = `https://weconnect02.herokuapp.com/api/v2/businesses/search?q=${this.state.q}&&category=${this.state.category}&&limit=6`;
      } else if (this.state.location) {
        url = `https://weconnect02.herokuapp.com/api/v2/businesses/search?q=${this.state.q}&&location=${this.state.location}&&limit=6`;
      } else {
        url = `https://weconnect02.herokuapp.com/api/v2/businesses/search?q=${this.state.q}&&limit=6&&page=${this.state.page}`;
      }
      this.props.onSearch(url);
    }

    render() {
      console.log("now", this.props);
      console.log("then", this.state.page);
      return (
        <div>
          <div className ="search">
            <form className= "form-inline" onSubmit={this.handleSearch}>
              <input className="form-control mr-sm-2" type="text" placeholder="Search" name="q" onChange={this.handleSearch}/>
              <button className="btn btn-success" type="submit">Search</button>

              <div className="form-group catalog">
                <label htmlFor="bizcategory">Category:</label>
                <select id="bizcategory" name="category" onChange={this.handleSearch}>
                  <option value="" defaultValue>Choose...</option>
                  <option value="Retail">Retail</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Housing">Housing</option>
                </select>
              </div>

              <div className="form-group catalog">
                <label htmlFor="bizcategory">Location:</label>
                <select id="bizcategory" name="location" onChange={this.handleSearch}>
                  <option value="" defaultValue>Choose...</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Kisumu">Kisumu</option>
                  <option value="Thika">Thika</option>
                </select>
              </div>

            </form>
          </div>
          <div>
            <nav aria-label="">
              <ul className="pagination">
                <li className="page-item">
                  <a type="hidden" className="page-link" name="page" value={this.props.ppage} onClick={this.handlePagination}>Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active">
                  <a className="page-link" value={this.state.page} href="#">2 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
}

export default CatalogSearch;
