function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
    let cantidad = 0;
    for (let balance of balancesDeUnPeriodo) {
      if (balance.ganancia > 0) {
        cantidad++;
      }
    }
    return cantidad;
  }
function balancesPositivos(balancesDeUnPeriodo) {
    let balances = [];
    for (let balance of balancesDeUnPeriodo) {
      if (balance.ganancia > 0) {
        balances.push(balance);
      }
    }
    return balances;
  }
  function gananciaPositiva(balancesDeUnPeriodo) {
    let sumatoria = 0;
    for (let balance of balancesDeUnPeriodo) {
      if (balance.ganancia > 0) {
        sumatoria = sumatoria + balance.ganancia;
      }
    }
    return sumatoria;
  }
  
  function promedioGananciasPositivas(balancesDeUnPeriodo) {
    let cantidadPositivos = cantidadDeBalancesPositivos(balancesDeUnPeriodo);
    let gananciaPositivos = gananciaPositiva(balancesDeUnPeriodo);
    if (cantidadPositivos === 0) {
      return 0;
    } else {
      return gananciaPositivos / cantidadPositivos;
    }
  }
  