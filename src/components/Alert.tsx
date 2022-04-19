export const Alert = (alertObj: any) => {
    console.log('alertObj = ',alertObj);
    return (
      <div className="alert alert-warning" role="alert">
          {alertObj && alertObj.text}
      </div>
    )
}