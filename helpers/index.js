export const formatDateTime = (date,format)=>{
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };

      const formattedDateTime = new Intl.DateTimeFormat('en-US',options).formatToParts(date); 
      return format.replace(/(yyyy|MM|dd|HH|mm|ss)/g,(match)=>{
        switch(match){
            case 'yyyy':
                return formattedDateTime.find(part=>part.type === 'year').value;
            case 'MM':
                return formattedDateTime.find(part => part.type === 'month').value;    
            case 'dd':
                return formattedDateTime.find(part => part.type === 'day').value;
            case 'HH':
                return formattedDateTime.find(part => part.type === 'hour').value;
            case 'mm':
                return formattedDateTime.find(part => part.type === 'minute').value;
            case 'ss':
                return formattedDateTime.find(part => part.type === 'second').value;
            default:
                return match;    
        };
      });
     
};