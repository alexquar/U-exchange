

export default function Footer() {
  return (
<footer class="bg-white fixed w-full bottom-0 left-0 rounded-lg shadow mt-4 p-3">
    <div class="w-full p-4 flex">
      <span class="text-md text-primary sm:text-center dark:text-gray-400 mr-auto">© 2024 U Exchange™. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://currencyapi.com/" class="hover:underline me-4 md:me-6">API</a>
        </li>
        <li>
            <a href="/" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="https://github.com/alexquar/U-exchange" class="hover:underline">Source</a>
        </li>
    </ul>
    </div>
</footer>
  )
}
