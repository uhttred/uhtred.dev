export default function (datetime: MaybeRef<string>, options = {}) {
  const { locale } = useI18n()
  const date = ref(datetime)
  return computed(() => {
    return new Date(date.value).toLocaleDateString(
      locale.value, 
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        ...options
    }) 
  })
}
