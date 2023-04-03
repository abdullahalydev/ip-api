<!-- Introduction -->
# Introduction

ByteIP is a completely free online service that allows users to retrieve information related to their IP address used to connect to the internet. This service provides a wide range of useful information, including the location of the IP address, the city, country, postal code, and latitude and longitude coordinates.
<br>
This information can be used for various purposes, such as analyzing internet traffic, and improving user experience on websites.

# Documentation


## detect endpoint
```
GET /detect
```
auto detect ip and get all information of ip
### Queries
| Name  | Description | Example |
| ------- | ------- | ------- |
| target  | target specify property of ip information  | ?target=city |

<br>

## lookup endpoint
```
GET /lookup/{{ ip }}
```
get all information of ip
### Queries
| Name  | Description | Example |
| ------- | ------- | ------- |
| target  | target specify property of ip information  | ?target=city |

<br>

## condition endpoint
```
GET /condition/{{ ip }}/has/{{ target }}/equal/{{ value }}
```
target is compared to the value and returns true or false



# Library
Soon

# Credits
- Bo_Dy#0941 - Developers Manager

# Support
- [Discord Server](https://discord.gg/FT2A5MpdUB)