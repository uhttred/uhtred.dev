export default function (datetime: MaybeRef<string>) {
  const { locale } = useI18n()
  const date = ref(datetime)
  return computed(() => {
    return new Date(date.value).toLocaleDateString(
      locale.value, 
      {
        weekday:'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) 
  })
}
