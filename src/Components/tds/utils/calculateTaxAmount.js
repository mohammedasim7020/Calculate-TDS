export default function calculateTaxAmount(income,TAX_SLABS) {
    let taxAmount = 0;
    for (const slab of TAX_SLABS) {
      if (income <= slab.min) {
        break;
      }
      const taxableAmount = Math.min(income - slab.min, slab.max - slab.min);
      taxAmount += taxableAmount * slab.rate;
    }
    return taxAmount;
  }
