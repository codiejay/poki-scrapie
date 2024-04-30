const useUtilityHooks = () => {
  const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
  
    const truncated = str.substring(0, maxLength - 3) + '...';
    const lastThree = str.substring(str.length - 3);
  
    return truncated + lastThree;
  };
  return {
    truncate
  }
}

export default useUtilityHooks;