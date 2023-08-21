export default function (number: MaybeRef<number>) {
  const { locale } = useI18n()
  const n = ref(number)
  return computed(() => {
    const formatter = Intl.NumberFormat(
      locale.value, 
      {
        notation: 'compact'
    })
    return formatter.format(n.value)
  })
}
