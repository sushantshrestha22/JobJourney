from collections import defaultdict


#Algorithm for sorting the input job post

#insertion
def insertion_sort(arr, key_func, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    for i in range(left + 1, right + 1):
        key_item = arr[i]
        j = i - 1
        while j >= left and key_func(arr[j]) > key_func(key_item):
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key_item


#merge
def merge(arr, key_func, left, mid, right):
    left_half = arr[left:mid + 1]
    right_half = arr[mid + 1:right + 1]
    i, j, k = 0, 0, left
    while i < len(left_half) and j < len(right_half):
        if key_func(left_half[i]) <= key_func(right_half[j]):
            arr[k] = left_half[i]
            i += 1
        else:
            arr[k] = right_half[j]
            j += 1
        k += 1
    while i < len(left_half):
        arr[k] = left_half[i]
        i += 1
        k += 1
    while j < len(right_half):
        arr[k] = right_half[j]
        j += 1
        k += 1


#finally timsort algorithm
def timsort(arr, key_func):
    min_run = 32
    n = len(arr)
    for i in range(0, n, min_run):
        insertion_sort(arr, key_func, i, min((i + min_run - 1), n - 1))
    size = min_run
    while size < n:
        for left in range(0, n, 2 * size):
            mid = min(n - 1, left + size - 1)
            right = min((left + 2 * size - 1), (n - 1))
            merge(arr, key_func, left, mid, right)
        size = size*2



# #Binary search algorithm
# def binary_search(arr, key, key_func):
#     low, high = 0, len(arr) - 1
#     key = key.lower()
    
#     while low <= high:
#         mid = (low + high) // 2
#         mid_value = key_func(arr[mid]).lower()

#         if mid_value < key:
#             low = mid + 1
#         elif mid_value > key:
#             high = mid - 1
#         else:
#             return mid  # Return the index where the key was found

#     return -1  # Return -1 if the key was not found




# def create_index(job_list, key_funcs):
#     index = defaultdict(list)
#     for i, job in enumerate(job_list):
#         for key_func in key_funcs:
#             key = key_func(job).lower()
#             index[key].append(i)
#     return index

# def search_index(index, search_key):
#     return index.get(search_key, [])


