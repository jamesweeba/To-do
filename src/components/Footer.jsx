function Footer({ size }) {


    return (
        <div className="footer">
            <div>{size} {size > 1 ?  ` items` :  ` item`} </div>

        </div>
    )
}

export default Footer;