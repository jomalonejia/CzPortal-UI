import React, { Component }from 'react'
import './pagination.css'

class Pagination extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    const {data, handlerChange,paginationLength = 5} = this.props
    const cardinal = parseInt(data.pages / paginationLength)
    const remainder = data.pages % paginationLength

    return (
      <ul className="czPagination">
        <li className={data.isFirstPage ? `disabled` : null}
            onClick={!data.isFirstPage ? () => handlerChange(data.pageNum - 1) : () => {}}><span>
          <i className="chevron left icon"></i>
        </span>
        </li>
        {

          data.pageNum <= (data.lastPage - remainder)
            ? Array.from({length: paginationLength}, (v, k) => paginationLength * (cardinal - 1 ) + k + 1)
            .map(page =>
              <li key={page}
                  className={page == data.pageNum ? 'active' : null}
                  onClick={page != data.pageNum ? () => handlerChange(page) : () => {}}>
                <span>{page}</span>
              </li>
            )
            : Array.from({length: data.pages % paginationLength}, (v, k) => k + 1 + paginationLength * parseInt(data.pages / paginationLength))
            .map(page =>
              <li key={page}
                  className={page == data.pageNum ? 'active' : null}
                  onClick={page != data.pageNum ? () => handlerChange(page) : () => {}}>
                <span>{page}</span>
              </li>
            )
        }
        <li hidden={data.lastPage - data.pageNum <= (paginationLength - 1) } onClick={() => handlerChange(cardinal * 5 + 1)}>
          <span>...</span>
        </li>
        <li className={data.isLastPage ? `disabled` : null}
            onClick={!data.isLastPage ? () => handlerChange(data.pageNum + 1) : () => {}}>
          <span ><i className="chevron right icon"></i></span>
        </li>
      </ul>

    )
  }
}

export default Pagination